// css
import './globals.css';
import Nav from './components/Nav'

// fonts
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google'
import CartMobileIcon from './components/CartMobileIcon';
import CartMobile from './components/CartMobile';
import CartProvider, { CartContext } from './context/CartContext';
import CartDesktop from './components/CartDesktop';
import Footer from './components/Footer';
import OrderState from './components/OrderState';
import { useContext } from 'react';
import AuthProvider from './context/AuthProvider'


const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400']
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
        <AuthProvider>
          <body className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}>
            {children}
          </body>
        </AuthProvider>
      </html>
    </CartProvider>
  );
}
