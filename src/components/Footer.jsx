function Footer (){
    return <footer className="page-footer teal darken-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Created by Akunov
                <a className="grey-text text-lighten-4 right"
                   href="https://github.com/frontdevkg/react-shop" rel='noreferrer' target='_blank'>Repo</a>
            </div>
        </div>
    </footer>
}
export {Footer}