import Bugsnag from '@bugsnag/js';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import formidable from 'formidable-serverless';
import fs from 'fs';

const API = {
    host: process.env.MAILGUN_ENDPOINT || 'https://api.mailgun.net',
    key: process.env.MAILGUN_API_KEY || 'key-398c9b563c4855e62deb4d9cd020ddc8',
    domain: process.env.MAILGUN_API_DOMAIN || 'sandbox59a0930a84614b27b3e712756266a274.mailgun.org',
    email_to: process.env.EMAIL_TO || 'test@webo.agency',
    email_from: process.env.EMAIL_FROM || 'mailgun@sandbox59a0930a84614b27b3e712756266a274.mailgun.org',
}

const mailgun = new Mailgun(formData);
const form = formidable({ multiples: true })
const mg = mailgun.client({username: 'api', key: API.key, url: API.host});


export default defineEventHandler((event) => {
    //console.log(API);
    const configRuntime = useRuntimeConfig()
    // Bugsnag.start(configRuntime.public.bugsnag);
    // Bugsnag.setContext('api');

     return new Promise((resolve, reject) => {
         form.parse(event.req, (err, fields, files) => {

            // if(err){
            //     Bugsnag.notify(new Error(JSON.stringify(err)));
            // }

            const message = {
                from: `${fields.name} <${API.email_from}>`,
                to: [API.email_to],
                subject: `${fields.company} x Webo`,
                text: JSON.stringify(fields),
                template: 'hello',
                'h:X-Mailgun-Variables': JSON.stringify({ // be sure to stringify your payload
                    name: fields.name,
                    company: fields.company,
                    tel: fields.phone,
                    message: fields.description,
                }),
                'o:tag':'www',
                'h:Reply-To': fields.mail
            }

            // const message = {
            //     from: API.email_from,
            //     to: ["test@webo.agency"],
            //     subject: "Hello",
            //     text: "Testing some Mailgun awesomness!",
            //     html: "<h1>Testing some Mailgun awesomness!</h1>"
            // }

            if(Object.keys(files).length !== 0 && files.constructor === Object){
                fs.promises.readFile(files.attachment.path).then(data => {
                    mg.messages.create(API.email_from, {
                        ...messgage,
                        attachment:{
                            name: files.attachment.name,
                            data
                        }
                    })
                    .then(msg => {
                        delete msg.id;
                        resolve(msg);
                    })
                    .catch(err => {
                        // Bugsnag.notify(new Error(JSON.stringify(err)));
                        reject(err);
                    });
                  })
            } else {
                return mg.messages.create(API.domain, {
                    ...message,
                })
                .then(msg => {

                    delete msg.id;
                    resolve(msg);
                })
                .catch(err => {
                    // Bugsnag.notify(new Error(JSON.stringify(err)));
                    reject(err);
                });
            }
        })
    });
});
