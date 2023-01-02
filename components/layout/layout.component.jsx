import Footer from "../footer/Footer.component";
import Navbar from "../navbar/Navbar.component";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
