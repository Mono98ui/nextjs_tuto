import Link from "next/link";
const Links = () => {

    const links = [
        {
            title:"Homepage",
            path:"./"
        },
        {
            title:"Contact",
            path:"./contact"
        },
        {
            title:"About",
            path:"./about"
        },
        {
            title:"Blog",
            path:"./blog"
        },
    ]

    return (
        <div>
            {links.map((link)=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))}
        </div>
    );
}
 
export default Links;