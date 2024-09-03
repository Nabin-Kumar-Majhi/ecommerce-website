import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="bg-slate-200 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          About Tharu Online Store
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
          **From Local Roots to Global Reach**
          <br /> Founded in 2003 as a humble local store, Tharu Online Store has
          grown into a thriving online marketplace, serving customers worldwide.
          Our journey began with a commitment to providing exceptional products
          and services to our community. Today, we're proud to continue that
          tradition, offering a diverse range of items to customers around the
          globe.
          <br /> **Unmatched Customer Service and Value**
          <br /> At Tharu Online Store, we believe that every customer deserves
          the best possible experience. Our dedicated team is committed to
          providing unparalleled customer service, ensuring that your shopping
          journey is smooth and enjoyable. From prompt responses to your
          inquiries to efficient order processing, we strive to exceed your
          expectations. We understand that value is essential. That's why we
          offer competitive prices on all our products without compromising
          quality. Our goal is to make your shopping experience affordable and
          satisfying.
          <br /> **A Grateful Thank You to Our Loyal Customers**
          <br /> We wouldn't be where we are today without the support of our
          loyal customers. Your trust and patronage have fueled our growth and
          inspired us to continue providing exceptional service. We are deeply
          grateful for your continued support and look forward to serving you
          for many years to come.
          <br /> **Join Us on Our Global Adventure**
          <br /> Whether you're a longtime customer or new to Tharu Online
          Store, we invite you to explore our vast selection of products and
          experience the difference for yourself. Together, let's create a
          brighter future one purchase at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
