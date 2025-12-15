import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

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
          <Link
            href="https://www.facebook.com/share/1KzALVG2rJ/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Link>
          <Link
            href="https://www.instagram.com/athletorywears?igsh=MWtnYjkzYm1hemljYQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
          <Link
            href="https://www.tiktok.com/@athletorywears?_r=1&_t=ZS-92F8TdzjT7P"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </Link>
          <Link
            href="https://x.com/athletorywears?s=21&t=H7aLQA6hvw3YDIhCxknCtA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </Link>
          <Link
            href="https://youtube.com/@athletorywears?si=JAIEGB3GxLnDksqo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
