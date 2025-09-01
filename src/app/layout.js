// css
import './globals.css';

// fonts
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google'
import CartProvider from './context/CartContext';
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
    <html lang='en'>
      <body className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
