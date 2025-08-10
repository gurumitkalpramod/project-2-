"use client";

import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  TextInput,
} from "flowbite-react";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard, FaCcPaypal, FaAmazonPay } from "react-icons/fa";

function Footerbar() {
  return (
    <Footer className="bg-white text-black">
      <div className="w-full bg-white text-black">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="COMPANY INFO" className="!text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="!text-black">About Us</FooterLink>
              <FooterLink href="#" className="!text-black">Latest Posts</FooterLink>
              <FooterLink href="#" className="!text-black">Contact Us</FooterLink>
              <FooterLink href="#" className="!text-black">Shop</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="HELP LINKS" className="!text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="!text-black">Tracking</FooterLink>
              <FooterLink href="#" className="!text-black">Order Status</FooterLink>
              <FooterLink href="#" className="!text-black">Delivery</FooterLink>
              <FooterLink href="#" className="!text-black">Shipping Info</FooterLink>
              <FooterLink href="#" className="!text-black">FAQ</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="USEFUL LINKS" className="!text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="!text-black">Special Offers</FooterLink>
              <FooterLink href="#" className="!text-black">Gift Cards</FooterLink>
              <FooterLink href="#" className="!text-black">Advertising</FooterLink>
              <FooterLink href="#" className="!text-black">Terms of Use</FooterLink>
            </FooterLinkGroup>
          </div>
          <div >
            <FooterTitle title="GET IN THE KNOW" className="!text-black" />
            <FooterLinkGroup col>
              <div className="max-w-md">
                <TextInput
                  id="email3"
                  type="email"
                  placeholder="Enter email"
                  required
                  className="!bg-white !text-gray-700"
                />
              </div>
            </FooterLinkGroup>
          </div>
        </div>

        {/* Bottom section with white background */}
        <div className="w-full bg-white text-black border-t border-gray-300 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <FooterCopyright
              href="#"
              by="NorthStar eCommerce"
              className="!text-black"
            />
            <FooterCopyright
              href="#"
              by="Privacy Policy  Terms & Conditions"
              className="!text-black"
            />
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-black">
            <FooterIcon href="#" icon={RiVisaLine} />
            <FooterIcon href="#" icon={FaCcMastercard} />
            <FooterIcon href="#" icon={FaCcPaypal} />
            <FooterIcon href="#" icon={FaAmazonPay} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footerbar;
