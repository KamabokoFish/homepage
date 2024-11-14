import 'styles/globals.scss';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import Header from '@components/ui/header/Header';
import ContentWrapper from '@components/ui/utils/ContentWrapper';
import Footer from '@components/ui/footer/Footer';
import NavMenu from '@components/ui/navButton/NavMenu';
import { Metadata } from 'next';

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Kamaboko.tech',
  description: 'かまぼこの個人サイト🏜️',
  keywords: ['かまぼこ', 'Kamaboko.tech'],
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    title: 'Kamaboko.tech',
    description: 'かまぼこの個人サイト🏜️',
    siteName: 'Kamaboko.tech',
    url: 'https://kamaboko.tech',
    locale: 'ja_JP',
  },
  twitter: {
    title: 'Kamaboko.tech',
    description: 'かまぼこの個人サイト🏜️',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// MEMO:
// 最大幅は768px(max-w-3xl)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mplus.className}>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <NavMenu />
        <Footer />
      </body>
    </html>
  );
}
