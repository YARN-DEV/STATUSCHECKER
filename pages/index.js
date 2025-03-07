import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Head>
        <title>Noreg status checker</title>
        <meta name="description" content="Welcome to my Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Eligibility Status Checker</h1>
        </header>
        <div className={styles.hero}>
          <Carousel activeIndex={index} onSelect={handleSelect} className={styles.carousel} interval={3000} controls={true} indicators={true}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="/images/slide4.jpg"
                alt="First slide"
                width={800}
                height={400}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="/images/slide2.jpg"
                alt="Second slide"
                width={800}
                height={400}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="/images/slide3.jpg"
                alt="Third slide"
                width={800}
                height={400}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <main className={styles.main}>
          <h2>Your Second Chance Starts Here.</h2>
          <p>
            We&apos;re here to support those with low credit, disabilities, or challenging circumstances. Everyone deserves the opportunity to rebuild, recover, and thrive. Let us guide you toward a brighter financial future.
          </p>
          <div className={styles.buttons}>
            <Link href="/home" legacyBehavior>
              <a className="btn btn-primary">Get Started Now</a>
            </Link>
            <Link href="/learn" legacyBehavior>
              <a className="btn btn-secondary">Learn How It Works</a>
            </Link>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>© Noreg. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
