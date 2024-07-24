import Header from "./components/Header";
export const metadata = {
  title: "Campeões do LoL",
  description: "Lista Campeões",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" style={{backgroundColor: '#CDFAFA'}}>
      <body>
        <Header/>
        <br/>
          {children}
      </body>
    </html>
  );
}
