import '../App.css'

const Footer = () => {
    return (
        <footer className="relative py-4 bg-indigo-600">
            {/* Copyright */}
            <div className="text-center text-sm font-semibold text-white tracking-wider">
                <p>© {new Date().getFullYear()} Pratik Gawari | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;