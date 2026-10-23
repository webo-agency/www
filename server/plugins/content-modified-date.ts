import { execSync } from 'node:child_process'

// Adds `dateModified` to blog posts from the date of the last git commit touching the file.
// Skipped on shallow clones, where every file would get the date of the latest commit.
let hasFullHistory: boolean | undefined

function canUseGitHistory() {
  if (hasFullHistory === undefined) {
    try {
      hasFullHistory = execSync('git rev-parse --is-shallow-repository', { encoding: 'utf8' }).trim() === 'false'
    } catch {
      hasFullHistory = false
    }
  }
  return hasFullHistory
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (!file._id?.startsWith('content:4.blog:') || file.dateModified || !canUseGitHistory()) return

    const filePath = 'content/' + file._id.replace(/^content:/, '').replace(/:/g, '/')
    try {
      const date = execSync(`git log -1 --format=%cI -- "${filePath}"`, { encoding: 'utf8' }).trim()
      if (date) file.dateModified = date
    } catch {
      // No git available: dateModified falls back to updatedAt in the page schema
    }
  })
})
