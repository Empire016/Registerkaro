'use client'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0d0d26] to-[#0b0b1f] text-white px-4 pt-20 pb-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {[
          {
            title: 'START A BUSINESS',
            items: [
              'Private Limited Company',
              'Limited Liability Partnership',
              'One Person Company',
              'Section 8 Company Registration',
              'Nidhi Company Registration',
              'Producer Company Registration',
              'MSME Registration',
            ],
          },
          {
            title: 'GOVERNMENT REGISTRATION',
            items: [
              'FSSAI Registration',
              'IEC Registration',
              'Trademark Registration',
              'DSC Registration',
            ],
          },
          {
            title: 'COMPLIANCE & TAX',
            items: [
              'Compliance Pvt Ltd',
              'Compliance LLP',
              'GST Registration',
            ],
          },
          {
            title: 'BIS & CDSCO',
            items: [
              'BIS Certification',
              'BIS FMCS Certification',
              'BIS CRS Certification',
              'ISI Mark Certification',
              'CDSCO Registration',
              'Medical Device Registration',
            ],
          },
        ].map((section, idx) => (
          <motion.div
            key={section.title}
            custom={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2 text-gray-300">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="border border-orange-400 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-500 transition-all duration-300">
          See all the services
        </button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center space-x-6 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.6 } },
        }}
      >
        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-orange-400 hover:text-orange-300 text-xl transition transform hover:scale-110"
            >
              <Icon />
            </a>
          )
        )}
      </motion.div>

      {/* Divider */}
      <div className="mt-12 border-t border-orange-500 w-full" />

      {/* Company Info Sections */}
      <div className="max-w-5xl mx-auto mt-12 space-y-8 text-gray-300 text-[0.9rem]">
        {[
          {
            heading: 'Navigating Regulatory Affairs',
            content:
              'In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI hold the keys to licenses and registrations for banks, financial institutions, and insurance businesses. We simplify this process by connecting you with our legal professionals. We understand your needs, handle license or registration applications, liaise with authorities, and deliver the licenses you require.',
          },
          {
            heading: 'Environmental Solutions',
            content:
              'RegisterKaro offers a comprehensive range of services to address environmental challenges in business. Our seasoned environmental experts, with over a decade of experience, provide solutions for environmental compliance and advisory, including battery waste management, plastic waste management, and e-waste management.',
          },
          {
            heading: 'Business Registration Expertise',
            content:
              'We are renowned for facilitating business registration, whether it’s a private limited company, one-person company, Section 8 company, LLP, public company, or Nidhi company. Our consultancy services extend from business setup from scratch to ongoing compliance.',
          },
          {
            heading: 'Safeguarding Intellectual Property',
            content:
              'Our team excels in IP registration services such as trademark registration, handling objections, managing assignments, copyright registration, and patent registration.',
          },
          {
            heading: 'Simplifying Taxation',
            content:
              'RegisterKaro is your all-in-one solution for tax-related needs. Our professionals assist with GST registration, professional tax registration, return filing, TDS filing, and audits.',
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h5 className="text-orange-400 font-semibold mb-1">
              {info.heading}
            </h5>
            <p>{info.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Legal Info */}
      <motion.div
        className="text-center mt-10 text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          By continuing this page, you agree to our{' '}
          <a href="#" className="text-orange-400 underline hover:text-orange-300">
            Terms & Conditions
          </a>
          ,{' '}
          <a href="#" className="text-orange-400 underline hover:text-orange-300">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-orange-400 underline hover:text-orange-300">
            Refund Policy
          </a>
          .
        </p>
        <p className="mt-2">© 2024 – Safe Ledger Private Limited. All rights reserved.</p>
        <p className="mt-2 text-[11px] text-gray-500 max-w-3xl mx-auto">
          Please note that we are a facilitating platform enabling access to reliable professionals. We are not a law firm and do not provide legal services ourselves. The information on this website is for the purpose of knowledge only and should not be relied upon as legal advice or opinion.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
