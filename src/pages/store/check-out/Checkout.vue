<template lang="">
  <Wrapper>
    <div class="content">
      <Header></Header>
      <Bodypay></Bodypay>
      <a
        href="http://localhost/vnpay_php/vnpay_create_payment.php?order_desc=Thanh+toan+don+hang125&amount=10000000"
        >redirect</a
      >
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import Header from "./components/Header.vue";
import Bodypay from "./components/body/Bodypay.vue";

export default {
  components: {
    Wrapper,
    Header,
    Bodypay,
  },
  data() {
    return {
      pay: null,
      checked: false,
      transport: null,
      pay: "https:\/\/sandbox.vnpayment.vn\/paymentv2\/vpcpay.html?vnp_Amount=1000000&vnp_Bill_Address=22+L%C3%A1ng+H%E1%BA%A1%2C+Ph%C6%B0%E1%BB%9Dng+L%C3%A1ng+H%E1%BA%A1%2C+Qu%E1%BA%ADn+%C4%90%E1%BB%91ng+%C4%90a%2C+TP+H%C3%A0+N%E1%BB%99i&vnp_Bill_City=H%C3%A0+N%E1%BB%99i&vnp_Bill_Country=VN&vnp_Bill_Email=xonv%40vnpay.vn&vnp_Bill_FirstName=NGUYEN&vnp_Bill_LastName=XO&vnp_Bill_Mobile=0934998386&vnp_Command=pay&vnp_CreateDate=20221129091830&vnp_CurrCode=VND&vnp_ExpireDate=20221129093300&vnp_Inv_Address=22+L%C3%A1ng+H%E1%BA%A1%2C+Ph%C6%B0%E1%BB%9Dng+L%C3%A1ng+H%E1%BA%A1%2C+Qu%E1%BA%ADn+%C4%90%E1%BB%91ng+%C4%90a%2C+TP+H%C3%A0+N%E1%BB%99i&vnp_Inv_Company=C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+gi%E1%BA%A3i+ph%C3%A1p+Thanh+to%C3%A1n+Vi%E1%BB%87t+Nam&vnp_Inv_Customer=L%C3%AA+V%C4%83n+Ph%E1%BB%95&vnp_Inv_Email=pholv%40vnpay.vn&vnp_Inv_Phone=02437764668&vnp_Inv_Taxcode=0102182292&vnp_Inv_Type=I&vnp_IpAddr=%3A%3A1&vnp_Locale=vn&vnp_OrderInfo=Noi+dung+thanh+toan&vnp_OrderType=billpayment&vnp_ReturnUrl=http%3A%2F%2Flocalhost%2Fvnpay_php%2Fvnpay_return.php&vnp_TmnCode=YWI14QQC&vnp_TxnRef=20221129091800&vnp_Version=2.1.0&vnp_SecureHash=d86391389ec9172928bbd8618da173b5ec64efe151e28d69357a7960e7ff4446b7651db3bdd480897728fb6146a4217045a62f1a5f3f07d93cfe3f0897015c31",
    };
  },
  methods: {
    payment() {
      var date = new Date();
      var current = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      var invoiceStr = current
        .toISOString()
        .split(".")[0]
        .replace(/[^\d]/gi, "");
      var expired = current;
      current.setMinutes(current.getMinutes() + 15);
      var expiredStr = expired
        .toISOString()
        .split(".")[0]
        .replace(/[^\d]/gi, "");

      // var vnpSecureHash = hash_hmac("sha512", $hashdata, $vnp_HashSecret); //

      // var url =
      //   "https:\/\/sandbox.vnpayment.vn\/paymentv2\/vpcpay.html?vnp_Amount=1000000&vnp_Bill_Address=22+L%C3%A1ng+H%E1%BA%A1%2C+Ph%C6%B0%E1%BB%9Dng+L%C3%A1ng+H%E1%BA%A1%2C+Qu%E1%BA%ADn+%C4%90%E1%BB%91ng+%C4%90a%2C+TP+H%C3%A0+N%E1%BB%99i&vnp_Bill_City=H%C3%A0+N%E1%BB%99i&vnp_Bill_Country=VN&vnp_Bill_Email=xonv%40vnpay.vn&vnp_Bill_FirstName=NGUYEN&vnp_Bill_LastName=XO&vnp_Bill_Mobile=0934998386&vnp_Command=pay&vnp_CreateDate=" +
      //   invoiceStr +
      //   "&vnp_CurrCode=VND&vnp_ExpireDate=" +
      //   expiredStr +
      //   "&vnp_Inv_Address=22+L%C3%A1ng+H%E1%BA%A1%2C+Ph%C6%B0%E1%BB%9Dng+L%C3%A1ng+H%E1%BA%A1%2C+Qu%E1%BA%ADn+%C4%90%E1%BB%91ng+%C4%90a%2C+TP+H%C3%A0+N%E1%BB%99i&vnp_Inv_Company=C%C3%B4ng+ty+C%E1%BB%95+ph%E1%BA%A7n+gi%E1%BA%A3i+ph%C3%A1p+Thanh+to%C3%A1n+Vi%E1%BB%87t+Nam&vnp_Inv_Customer=L%C3%AA+V%C4%83n+Ph%E1%BB%95&vnp_Inv_Email=pholv%40vnpay.vn&vnp_Inv_Phone=02437764668&vnp_Inv_Taxcode=0102182292&vnp_Inv_Type=I&vnp_IpAddr=%3A%3A1&vnp_Locale=vn&vnp_OrderInfo=Noi+dung+thanh+toan&vnp_OrderType=billpayment&vnp_ReturnUrl=http%3A%2F%2Flocalhost%2Fvnpay_php%2Fvnpay_return.php&vnp_TmnCode=YWI14QQC&vnp_TxnRef=20221129091800&vnp_Version=2.1.0&vnp_SecureHash=d86391389ec9172928bbd8618da173b5ec64efe151e28d69357a7960e7ff4446b7651db3bdd480897728fb6146a4217045a62f1a5f3f07d93cfe3f0897015c31";
      return url;
    },
    // a() {
    //   // var ipAddr = req.headers['x-forwarded-for'] ||
    //   //     req.connection.remoteAddress ||
    //   //     req.socket.remoteAddress ||
    //   //     req.connection.socket.remoteAddress;

    //   var ipAddr = "%3A%3A1";

    //   var tmnCode = "YWI14QQC";
    //   var secretKey = "CYFLWMNCJNGRGTFGLHZBUZTWYUHFTPLU";
    //   var vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    //   var returnUrl = "http://localhost/vnpay_php/vnpay_return.php";

    //   var date = new Date();

    //   var createDate = dateFormat(date, "yyyymmddHHmmss");
    //   var orderId = dateFormat(date, "HHmmss");
    //   var amount = 10000;
    //   var bankCode = "";

    //   var orderInfo = "req.body.orderDescription";
    //   var orderType = "billpayment";
    //   var locale = "vn";
    //   if (locale === null || locale === "") {
    //     locale = "vn";
    //   }
    //   var currCode = "VND";
    //   var vnp_Params = {};
    //   vnp_Params["vnp_Version"] = "2.1.0";
    //   vnp_Params["vnp_Command"] = "pay";
    //   vnp_Params["vnp_TmnCode"] = tmnCode;
    //   // vnp_Params['vnp_Merchant'] = ''
    //   vnp_Params["vnp_Locale"] = locale;
    //   vnp_Params["vnp_CurrCode"] = currCode;
    //   vnp_Params["vnp_TxnRef"] = orderId;
    //   vnp_Params["vnp_OrderInfo"] = orderInfo;
    //   vnp_Params["vnp_OrderType"] = orderType;
    //   vnp_Params["vnp_Amount"] = amount * 100;
    //   vnp_Params["vnp_ReturnUrl"] = returnUrl;
    //   vnp_Params["vnp_IpAddr"] = ipAddr;
    //   vnp_Params["vnp_CreateDate"] = createDate;
    //   if (bankCode !== null && bankCode !== "") {
    //     vnp_Params["vnp_BankCode"] = bankCode;
    //   }

    //   // vnp_Params = sortObject(vnp_Params);

    //   var signData = querystring.stringify(vnp_Params, { encode: false });

    //   var hmac = crypto.createHmac("sha512", secretKey);
    //   var signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    //   vnp_Params["vnp_SecureHash"] = signed;
    //   vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });
    //   console.log(vnp_Params);
    //   return vnpUrl;
    // },
  },
};
</script>
<style lang="scss" scoped></style>
