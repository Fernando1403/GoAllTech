import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Cases } from '../components/Cases';
import { Values } from '../components/Values';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Cases />
      <Values />
    </>
  );
}
