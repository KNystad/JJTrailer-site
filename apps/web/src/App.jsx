import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HomePage from '@/pages/HomePage.jsx';
function App() {
  const trailers = [{
    type: 'JJ-Trailer Eagle - 4000-15',
    price: '125,000 NOK',
    dimensions: '1850*4000',
    weight: '1500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 4500-15',
    price: '133,700 NOK',
    dimensions: '2100*4500',
    weight: '1500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 4500-20',
    price: '151,800 NOK',
    dimensions: '2100*4500',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 4500-25',
    price: '156,000 NOK',
    dimensions: '2100*4500',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-15',
    price: '148,000 NOK',
    dimensions: '2100*5000',
    weight: '1500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-20',
    price: '165,700 NOK',
    dimensions: '2100*5000',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-25',
    price: '169,000 NOK',
    dimensions: '2100*5000',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5000-27',
    price: '173,180 NOK',
    dimensions: '2100*5000',
    weight: '2700 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5500-20',
    price: '172,000 NOK',
    dimensions: '2100*5500',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5500-25',
    price: '177,625 NOK',
    dimensions: '2100*5500',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 5500-27',
    price: '183,270 NOK',
    dimensions: '2100*5500',
    weight: '2700 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6000-20',
    price: '180,740 NOK',
    dimensions: '2100*6000',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6000-25',
    price: '183,560 NOK',
    dimensions: '2100*6000',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6000-27',
    price: '186,375 NOK',
    dimensions: '2100*6000',
    weight: '2700 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6500-20',
    price: '183,800 NOK',
    dimensions: '2100*6500',
    weight: '2000 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6500-25',
    price: '190,850 NOK',
    dimensions: '2100*6500',
    weight: '2500 kg'
  }, {
    type: 'JJ-Trailer Eagle - 6500-27',
    price: '192,500 NOK',
    dimensions: '2100*6500',
    weight: '2700 kg'
  }];
  const sellers = [{
    name: 'Thorstein',
    phone: '+47 90 06 22 60',
    email: 'thorstein@jjtrailer.no',
    location: 'Sommersetlia 1, 9143 Skibotn'
  }, {
    name: 'Tor-Vidar Nystad',
    phone: '+47 91 32 61 32',
    email: 'tor-vidar@jjtrailer.no',
    location: 'Sommersetlia 1, 9143 Skibotn'
  }];
  return <>
      <Helmet>
        <title>JJ Trailer Norge - Professional trailer sales in Norway</title>
        <meta name="description" content="Quality trailers for sale in Norway. Standard, flatbed, refrigerated, and tanker trailers available. Contact our sales team in Oslo and Bergen." />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container">
          <div className="flex items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/logo-main.png" alt="JJ Trailer Norge company logo, representing professional trailer sales services in Norway" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center ml-auto gap-2">
              <Button asChild className="inline-flex">
                <a href="#hero">Hjem</a>
              </Button>
              <Button asChild className="inline-flex">
                <a href="#pricing">Priser</a>
              </Button>
              <Button asChild className="inline-flex">
                <a href="#contact">Ta kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HomePage />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Våre henger modeller</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Velg fra vårt utvalg av profesjonelle hengere, hver bygget etter norske standarder med kvalitetsmaterialer og pålitelig konstruksjon. <br />Forh.pris + mva. Frakt medkommer. <br />Kontakt oss for mer informasjon.
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-border">
            <div className="divide-y divide-border">
              {trailers.map((trailer, index) => <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-4 px-2 hover:bg-muted/50 transition-colors duration-200">
                  <div className="font-semibold text-primary w-full md:w-[40%] text-lg md:text-base mb-1 md:mb-0">
                    {trailer.type}
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground w-full md:w-[35%] text-sm mb-2 md:mb-0">
                    <span>{trailer.dimensions}</span>
                    <span className="text-border/60">|</span>
                    <span>{trailer.weight}</span>
                  </div>
                  
                  <div className="font-bold text-foreground w-full md:w-[25%] md:text-right text-lg">
                    {trailer.price}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Kontakt vårt salgsteam</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ta kontakt med våre erfarne salgsrepresentanter i Troms for personlig assistanse med ditt hengerkjøp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sellers.map((seller, index) => <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{seller.name}</CardTitle>
                  <CardDescription className="text-base">{seller.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href={`tel:${seller.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{seller.phone}</span>
                  </a>
                  
                  <a href={`mailto:${seller.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{seller.email}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{seller.location}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <Card className="overflow-hidden border-border/70 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Finn oss i Skibotn</CardTitle>
                <CardDescription className="text-base">
                  Besøk oss på Sommersetlia 1, 9143 Skibotn.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-border/70 bg-muted/30">
                  <iframe
                    title="Google Maps for Sommersetlia 1, 9143 Skibotn"
                    src="https://www.google.com/maps?q=Sommersetlia%201,%209143%20Skibotn&output=embed"
                    className="h-[420px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex justify-center">
                  <Button asChild>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Sommersetlia+1%2C+9143+Skibotn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apne i Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="https://horizons-cdn.hostinger.com/17487f3b-b290-48d1-a2e6-bc09942d517a/370fb9b7e18cb0da1a76dfc7be7d56bb.png" alt="JJ Trailer Norge company logo in white, displayed in the footer of the website" className="h-10 w-auto brightness-0 invert" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <a href="#" className="hover:underline transition-all duration-200">Privacy Policy</a>
              <a href="#" className="hover:underline transition-all duration-200">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} JJ Trailer Norge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>;
}
export default App;