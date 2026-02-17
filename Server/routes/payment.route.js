import {Router} from 'express';

const router = Router;

router
     .route('/razorpay-key')
     .get(getRazorpayKey);

router
     .route('/subscribe')
     .post(buySubscription);

router
     .route('/verify')
     .post(verifySubscription);

router
     .route('/unSubscribe')
     .post(cancelSubscription);

router
      .route("/")
      .get(allPayments);

export default router;      