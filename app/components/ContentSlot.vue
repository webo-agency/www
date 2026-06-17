<script>
import { Fragment, defineComponent, isVNode } from 'vue';

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value === null || value === undefined || value === false) {
    return [];
  }

  return [value];
}

function flattenFragments(nodes) {
  return nodes.flatMap((node) => {
    if (isVNode(node) && node.type === Fragment) {
      return flattenFragments(toArray(node.children));
    }

    return [node];
  });
}

function resolveUnwrapTags(unwrap) {
  if (unwrap === null || unwrap === undefined || unwrap === false) {
    return null;
  }

  if (Array.isArray(unwrap)) {
    return unwrap.filter(Boolean).map((tag) => String(tag).toLowerCase());
  }

  const value = String(unwrap).trim().toLowerCase();

  // `<ContentSlot unwrap />` ends up as an empty string and means unwrap any element wrapper.
  if (!value) {
    return [];
  }

  return [value];
}

function unwrapNodes(nodes, tags) {
  return nodes.flatMap((node) => {
    if (!isVNode(node)) {
      return [node];
    }

    if (node.type === Fragment) {
      return unwrapNodes(flattenFragments(toArray(node.children)), tags);
    }

    const isElement = typeof node.type === 'string';
    const matchesTag = tags.length === 0 || (isElement && tags.includes(node.type.toLowerCase()));

    if (!isElement || !matchesTag) {
      return [node];
    }

    const children = flattenFragments(toArray(node.children));
    return children.length ? children : [node];
  });
}

export default defineComponent({
  name: 'ContentSlot',
  props: {
    use: {
      type: Function,
      default: null,
    },
    unwrap: {
      type: [String, Array],
      default: null,
    },
  },
  setup(props, { slots }) {
    return () => {
      const rendered = flattenFragments(
        toArray(props.use ? props.use() : slots.default ? slots.default() : []),
      );
      const unwrapTags = resolveUnwrapTags(props.unwrap);

      if (!unwrapTags) {
        return rendered;
      }

      return unwrapNodes(rendered, unwrapTags);
    };
  },
});
</script>
