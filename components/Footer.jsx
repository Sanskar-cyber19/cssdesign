import React from 'react'
import style from '@/styles/components/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <main className={style.main}>
	  <div class="footer-top">
      <div class="container">
        <div class="row gy-3">
          <div class="col-lg-5 col-md-12 footer-info text-md-start">
		<div class="logo d-flex align-items-center">
              <h2 class="pb-2">CSS TOOLS</h2>
            </div>
            <p> This Website Useful All Bigners for learn and use the css3 With designing best website.</p>
				<Link href="/"><FaGithubSquare size="2em" /></Link>
				<Link href="/"><FaLinkedin size="2em" /></Link>
				<Link href="/"><FaInstagramSquare size="2em" /></Link>
          </div>

          <div class="col-lg-3 col-md-5 footer-contact text-left text-md-start">
            <h4>Useful Links</h4>
            <ul type="none">
              <li><Link href="/"><i class="fa fa-arrow-right"></i> Home</Link></li>
              <li><Link href="/tools"><i class="fa fa-arrow-right"></i> Tools</Link></li>
              <li><Link href="/about"><i class="fa fa-arrow-right"></i> About</Link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Baramati <br/>
               Dist.Pune, MH 413102<br/>
              India <br/><br/>
              <strong>Phone:</strong> +91 9156 5591 79<br/>
              <strong>Email:</strong> fg9084752007@gmail.com<br/>
            </p>

          </div>

        </div>
      </div>
    </div>
	<hr width="100%" height="2vh"/>
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>CSS TOOLS</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://www.insgram.com/">Sanskar Bandgar</a>
      </div>
    </div>
      </main>
    </>
  )
}

export default Footer
