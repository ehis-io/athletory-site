import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <Link href="/" className="text-2xl font-bold font-serif tracking-tighter">
                        ATHLETORY
                    </Link>
                    <p className="mt-4 text-muted-foreground max-w-sm">
                        Elevating your everyday style with premium comfort and timeless design.
                        Crafted for those who move.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Shop</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-foreground">New Arrivals</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Best Sellers</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Accessories</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Sale</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="#" className="hover:text-foreground">FAQ</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Shipping & Returns</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Athletory. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    {/* Social icons could go here */}
                    <span className="hover:text-foreground cursor-pointer">Instagram</span>
                    <span className="hover:text-foreground cursor-pointer">Twitter</span>
                </div>
            </div>
        </footer>
    );
}
