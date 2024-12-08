import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-[#FBEBB5]">
      <div className="flex py-[36px] justify-end gap-[100px] mr-[200px]">
        <nav className="flex justify-center gap-[90px] text-[16px] text-black">
          <Link className="text-[16px]" href="/">
            Home
          </Link>
          <Link href="/SingleProduct">Single Product</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex justify-end gap-[50px]">
          <img src="/mdi_account-alert-outline.svg" alt="Account Alert" />
          <img src="/akar-icons_search.svg" alt="Search" />
          <img src="/akar-icons_heart.svg" alt="Heart" />
          <img
            src="/ant-design_shopping-cart-outlined.svg"
            alt="Shopping Cart"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
