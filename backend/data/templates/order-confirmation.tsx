import { BigNumberValue, OrderDTO } from "@medusajs/framework/types";
import { Heading, Section } from "@react-email/components";
import Cart from "./components/cart";
import EmailBody from "./components/email-body";
import Layout from "./components/layout";
import CustomerInformation from "./components/shipping-address";
import { Title } from "./components/style";
import { convertToLocale } from "./utils";

export default function OrderConfirmation({ order }: { order: OrderDTO }) {
  const convertMoney = (amount: BigNumberValue) =>
    convertToLocale({
      amount: Number(amount),
      currency_code: order.currency_code,
    });
  return (
    <Layout preview="Order confirmation">
      <Section className="w-full max-w-[525px] px-5 mt-32 mb-10" align="left">
        <Heading className="mb-3" style={Title}>
          Thank you for your order!
        </Heading>
        <EmailBody
          paragraphs={[
            "Thank you so much for your recent order with us! We're excited to let you know that we've received your order and it's now being processed.",
          ]}
        />
        <Cart
          orderNumber="1234567890"
          date={new Date(order.created_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          checkout={{
            Subtotal: convertMoney(order.item_subtotal),
            discount: convertMoney(order.discount_total),
            shipping: convertMoney(order.shipping_total),
            taxes: convertMoney(order.tax_total),
            total: convertMoney(order.total),
          }}
        />
        <CustomerInformation
          method={order.shipping_methods?.[0].name}
          ShippingAddress={{
            name:
              order.shipping_address.first_name +
              " " +
              order.shipping_address.last_name,
            company: order.shipping_address.company,
            street: order.shipping_address.address_1,
            city: order.shipping_address.city,
            country: order.shipping_address.country_code,
          }}
          BillingAddress={{
            name:
              order.billing_address.first_name +
              " " +
              order.billing_address.last_name,
            company: order.billing_address.company,
            street: order.billing_address.address_1,
            city: order.billing_address.city,
            country: order.billing_address.country_code,
          }}
        />
      </Section>
    </Layout>
  );
}
