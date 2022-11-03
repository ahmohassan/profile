const sparkpost = require('sparkpost');

const emailHandler = async (req, res) => {
    // const client = new sparkpost(process.env.SPARKPOST);
    const client = new sparkpost('<a5bcc8cbf95a404b3d4e347cbcf31cdac407e777>');
    const data = JSON.parse(req.body);
    const {email , subject, message} = data;

    client.transmissions.send({
        content:{
            from: "som2018mali@gmail.com",
            subject : `<html><body><p>${subject}</p></body></html>`,
            html: `<html><body><p>${message}</p></body></html>`
        },
        recipients : [{address: email}]
    })
    .then(
        ()=>{
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application-json');
            res.end(JSON.stringify({error : null}))
        }
    )
    .catch(
        ()=>{
            res.statuscode = 500;
            res.setHeader('Content-Type', 'application-json');
            res.end(JSON.stringify({error : 'error seding email'}))
        }
    )
}

export default emailHandler;