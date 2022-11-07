
const regTemplate = (name, email) => {
    return `<div>
        <h1>Hi, ${name} Welcome to CMS-v1.0</h1>
        <article style="margin:auto; object-fit:cover;">
            <img src="https://media.istockphoto.com/id/1391461206/vector/handshake-of-two-businessmen-in-suits-partnership-concept.jpg?b=1&s=612x612&w=0&k=20&c=NUYFIVu9NoNhJWVL9izNvveY1RN-gKMTZ2lK5lZq6Q4=" width="300" height="300"/>
            <h4>We are excited to have you get started with mail id = <span style="color:orangered;">${email}</span>, Your account is ready to use. </h4>
        </article>
    </div>`
}

module.exports = regTemplate