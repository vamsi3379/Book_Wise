package com.luv2code.library.springbootlibrary.controller;

import com.luv2code.library.springbootlibrary.requestmodels.PaymentInfoRequest;
import com.luv2code.library.springbootlibrary.service.PaymentService;
import com.luv2code.library.springbootlibrary.utils.ExtractJWT;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// @CrossOrigin("https://localhost:3000")
@CrossOrigin("*")
@RestController
@RequestMapping("/api/payment/secure")
public class PaymentController {

    private PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/payment-intent")
    public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentInfoRequest paymentInfoRequest)
            throws StripeException {
        System.out.println("came here 1");
        PaymentIntent paymentIntent = paymentService.createPaymentIntent(paymentInfoRequest);
        System.out.println("came here 3");
        String paymentStr = paymentIntent.toJson();
        System.out.println("came here 5");
        return new ResponseEntity<>(paymentStr, HttpStatus.OK);
    }

    @PutMapping("/payment-complete")
    public ResponseEntity<String> stripePaymentComplete(@RequestHeader(value = "Authorization") String token)
            throws Exception {
        String userEmail = ExtractJWT.payloadJWTExtraction(token, "\"sub\"");
        if (userEmail == null) {
            throw new Exception("User Email is missing");
        }
        return paymentService.stripePayment(userEmail);
    }
}
