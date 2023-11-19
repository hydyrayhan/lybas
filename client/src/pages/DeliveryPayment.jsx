import React from "react";
import { t } from "i18next";

function DeliveryPayment() {

  return (
    <>
      <div className="deliveryPayment container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="deliveryPayment__title">{t('deliveryAndPaymentHead')}</h1>

      <ol dangerouslySetInnerHTML={{ __html: t('deliveryAndPaymentBody') }}>

      </ol>

      </div>
    </>
  )

}

export default DeliveryPayment
