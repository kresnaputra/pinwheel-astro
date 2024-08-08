import React from "react";
import { BsPinAngleFill } from "react-icons/bs";
import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";

const PricingCard = ({ item }) => {
  const FeatherIcon = Icon[humanize(item.icon)];
  return (
    <div className="mt-8 px-3 md:col-6 lg:col-4 lg:mt-0" key={item.title}>
      <div
        className={`rounded-xl bg-white px-8 py-10 shadow-lg ${
          item.featured ? "-mt-16 border border-primary " : undefined
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="h3">{item.title}</h2>
            <p className="mt-3 text-2xl text-dark">
              {item.pre_currency} {item.price} {item.post_currency}
            </p>
          </div>
          <span
            className={`inline-flex p-4  items-center justify-center rounded-full font-bold ${
              item.featured
                ? "bg-gradient text-white"
                : "bg-theme-light text-dark"
            }`}
          >
            <FeatherIcon className="font-semibold" />
          </span>
        </div>
        <p className="mt-6">{item.description}</p>
        <div className="my-6 border-y border-border py-6">
          <h4 className="h6">{item.services.title}</h4>

          <ul className="mt-6">
            {item.services.list.map((service, i) => (
              <li className="mb-3 text-sm" key={`service-${i}`}>
                <span className="mr-2">
                  <BsPinAngleFill
                    className={`mr-1 inline h-[14px] w-[14px] ${
                      item.featured ? "text-primary" : undefined
                    }`}
                  />
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <a
            className={`btn ${
              item.featured ? "btn-primary" : "btn-outline-white"
            } block h-[48px] w-full rounded-[50px] leading-[30px]`}
            href={item.buttons.buy_now.link}
          >
            {item.buttons.buy_now.label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
