import Link from "next/link";

export default function Footer() {
    return <footer className="app-footer">
        <div className="py-3 text-center container">
            {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
            <small className="copyright">
                Designed with <span className="sr-only">love</span>
                <i className="fa-heart fas" style={{ color: "#fb866a" }} /> by{" "}
                <Link
                    className="app-link"
                    href="#"
                    target="_blank"
                >
                    ReDevs
                </Link>{" "}

            </small>
        </div>
    </footer>
}