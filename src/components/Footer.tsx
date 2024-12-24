import '../App.css'

const Footer = () => {
    return (
        <footer className="relative mt-20 py-5 bg-transparent">
            {/* Copyright */}
            <div className="text-center text-[#5651e5] font-bold">
                <p>© {new Date().getFullYear()} Pratik Gawari | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;