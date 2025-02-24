import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const privacyPolicy: Array<{
  title: string;
  subtitle?: string[];
  content: string[];
}> = [
  {
    title: "Our Mission",

    content: [
      "At Gift Ginnie, our mission is to provide you with customized gifting solutions that reflect your values, enhance your brand, and delight the recipient. We specialize in offering a wide variety of products that can be personalized to your needs—whether you're looking for corporate giveaways, wedding favors, or sustainable gifts for any other occasion. We are committed to delivering exceptional products and services with an emphasis on eco-friendliness, customer satisfaction, and lasting impressions.",
    ],
  },
  {
    title: "15+ Years of Expertise",
    content: [
      "With over 15 years of industry experience, we understand the nuances of custom gifting and the impact a personalized gift can have. Over the years, we’ve worked with countless businesses, individuals, and organizations across India, gaining in-depth knowledge about their needs, preferences, and expectations. This experience allows us to offer tailored solutions that go beyond just gifting—we help you create connections, enhance your brand image, and make every occasion memorable.",
    ],
  },
  {
    title: "Our Specialization",
    subtitle: [
      "Customized Corporate Gifting",
      "On-Demand Printing",
      "Eco-Friendly Products",
      "Made in India Products",
    ],
    content: [
      "Whether you're looking for high-end gifts for clients, personalized merchandise for events, or employee recognition gifts, we offer a range of corporate gifting solutions designed to elevate your brand. From custom-branded stationery and tech gadgets to luxury items, our gifts help you make a lasting impression in the corporate world.",
      "Our advanced printing technology allows us to provide on-demand printing for a wide range of products. From t-shirts and bags to notebooks and mugs, we can print logos, designs, and messages with precision and high quality. Whether it's a small batch or a large order, we ensure each print is vibrant, durable, and perfectly aligned with your vision",
      "We are committed to sustainability and offer a range of eco-friendly gifting options, including reusable water bottles, biodegradable products, organic cotton bags, bamboo-based items, and more. Our eco-friendly solutions are perfect for businesses and individuals looking to celebrate responsibly while leaving a positive environmental impact.",
      "All our products are proudly made in India, supporting local artisans and manufacturers. By offering high-quality, handcrafted products, we contribute to the growth of India's economy while delivering exceptional gifting solutions for our clients.",
    ],
  },
  {
    title: "Why Eco-Friendly Matters to Us",
    content: [
      "Sustainability is at the heart of everything we do. Our eco-friendly products are not just good for the planet—they are also designed to be stylish, functional, and practical for everyday use. Whether it’s a bamboo pen, an organic cotton tote, or a recycled material notebook, we offer products that align with today’s values of conscious consumption. Our goal is to reduce the environmental impact of gifting while offering innovative products that reflect your commitment to a greener future.",
    ],
  },
  {
    title: "Technology-Driven Excellence",
    content: [
      "At Gift Ginnie, we believe that innovation is key to delivering the best results. Our state-of-the-art technology and machinery ensure precision, quality, and efficiency in every product we create. From high-definition printing to laser engraving and embroidery, our advanced equipment allows us to produce products that meet the highest standards.",
      "We offer both small and large-scale production, ensuring fast turnaround times without compromising on quality. Whether you're looking for a few custom gifts or hundreds of personalized items, we are equipped to handle orders of any size with utmost professionalism.",
    ],
  },
  {
    title: "Customer Satisfaction",
    content: [
      "Our Primary Vision Customer satisfaction is the core of our business philosophy. We believe in building long-lasting relationships with our clients, and our focus on delivering exceptional products and services ensures that we meet and exceed your expectations. Our goal is not just to provide you with the perfect gift, but to ensure that your experience with us is smooth, enjoyable, and hassle-free.",
      "We listen to our clients, understand their requirements, and work closely with them throughout the process to deliver personalized solutions that fit their needs. Our team is dedicated to providing excellent customer service, and we strive to ensure that every client is completely satisfied, which is why many of our clients return to us for their future gifting needs.",
    ],
  },
  {
    title: "Why Choose Us?",
    subtitle: [
      "Customization Excellence",
      "Eco-Friendly Commitment",
      "Quality & Innovation",
      "Diverse Product Range",
      "Timely Delivery & Customer Care",
      "In House Printing & Branding Services",
    ],
    content: [
      "We offer an extensive range of products that can be customized to reflect your brand, occasion, or personal style. From custom logos to unique designs, we make sure your gifts are one-of-a-kind.",
      "We offer a wide range of sustainable gifting options made from renewable, recyclable, and biodegradable materials, ensuring your gifts have a minimal environmental footprint.",
      "With over 15 years of experience and state-of-the-art technology, we ensure that every product we deliver is crafted with the highest quality standards and the latest trends in mind.",
      "From weddings and birthdays to corporate events, conferences, and annual days, we provide personalized gifting solutions for every occasion.",
      "We understand the importance of timelines, especially for large events or corporate functions. Our reliable delivery system ensures that your gifts arrive on time, and our customer service team is always ready to assist you.",
      "We understand that a gift or any event without personalization or branding is incomplete. So we bring you that latest technology of on demand printing & branding services to make difference to your work.",
    ],
  },
  {
    title: "Our Promise to You",
    content: [
      "At Gift Ginnie, we are more than just a gifting company—we are your partner in creating meaningful moments. Whether you are celebrating a milestone, promoting your brand, or hosting an event, we are here to help you make a lasting impression with customized gifts that reflect your vision.",
      "Customer satisfaction is our top priority, and we are committed to providing you with an exceptional experience from start to finish. With a wide range of customizable products, eco-friendly options, and cutting-edge technology, we aim to be your go-to destination for all your gifting needs.",
    ],
  },
];

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">
      <div className="px-5 md:px-20 lg:px-56 py-16 md:py-20 dark:text-white">
        <Breadcrumbs />
        <div className="uppercase text-3xl md:4xl lg:text-5xl font-bold mb-14">
          About Us
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold">
            Welcome to Gift Ginnie, your trusted partner in premium customized
            corporate gifting, on-demand printing, and high-quality
            Made-in-India products. With over 15 years of experience, we have
            established ourselves as a leader in the gifting industry, offering
            unique, eco-friendly, and personalized gifts for all types of
            occasions. Whether it's a wedding, birthday, corporate event,
            conference, or annual day celebration, we are dedicated to making
            your special moments even more memorable with gifts & our services
            that truly stand out.
          </p>
          <div className="flex flex-col gap-6">
            {privacyPolicy.map((item, index) => (
              <div key={index}>
                <p className="font-bold mb-2 text-2xl">{item.title}:</p>
                <ul className="list-disc list-outside ps-5">
                  {item.content.map((content, index) => (
                    <li key={index} className="font-semibold mb-2">
                      {item.subtitle && item.subtitle[index] && (
                        <span>
                          {
                            <span className="font-bold underline">
                              {item.subtitle[index]}
                            </span>
                          }{" "}
                          :{" "}
                        </span>
                      )}

                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-semibold">
            Thank you for choosing Gift Ginnie. We look forward to helping you
            celebrate your special moments with customized, high-quality gifts
            that are as unique as you are.
          </p>
        </div>
      </div>
    </div>
  );
}
