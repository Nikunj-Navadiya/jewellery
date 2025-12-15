import React from "react";

const Refundpolicy = () => {
    return (
        <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4 py-10 bg-[#dbdedf]">
            <div>
            <h1 className="text-4xl font-bold text-center pb-4">Refund policy</h1>
            </div>

            <div className="pb-4">
                <p className="text-lg text-gray-800">At Krishnas Jewellers, we strive to ensure your complete satisfaction with every purchase. If you are not entirely satisfied with your order, our return and refund policy outlines the conditions and process for returning items.</p>
            </div>

            <div className="pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Eligibility for Returns and Refunds</h2>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li><span>Return Window: </span>You may return your order within 7 days of delivery. After this period, returns will not be accepted.</li>
                    <li><span>Condition of Items: </span>Returned items must be unused, undamaged, and free from any signs of wear. Items that are damaged, show signs of use, or have any alterations will not be eligible for return or refund.</li>
                    <li><span>Required Items: </span>To process a return, you must include the original product bill, packaging box, and product tag that was provided at the time of delivery.</li>
                   
                </ul>
            </div>

            <div className="pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Return and Refund Process</h2>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li><span>Contact Us: </span>Notify our customer service team of your intention to return an item within the 7-day return window. Provide your order number and details of the item you wish to return.</li>
                    <li><span>Return Authorization: </span>Once your return request is approved, we will provide you with instructions on how to send the item back to us.</li>
                    <li><span>Return Shipment: </span>Ship the item back to us in its original packaging, including the product bill and tags. You are responsible for the return shipping costs.</li>
                    <li><span>Inspection and Processing: </span>Upon receipt, we will inspect the returned item to ensure it meets our return criteria. If approved, a refund will be processed.</li>
                </ul>
            </div>

            <div className="pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Refund Amount</h2>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li><span>Refund Deduction: </span>A 30% restocking fee will be deducted from the original purchase price. The remaining amount will be refunded to your original method of payment.</li>
                    <li><span>Refund Timeline: </span>Please allow 7-10 business days for the refund to be processed after we receive and inspect the returned item.</li>
                </ul>
            </div>

            <div className="pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Non-Returnable Items</h2>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li>Items that are damaged, show signs of use, or are missing the original product bill, packaging box, or product tag are not eligible for return or refund.</li>
                </ul>
            </div>

            <div className="pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                <p className="text-lg text-gray-800">If you have any questions or need assistance with your return, please contact our customer service team at:</p>
                <p className="text-lg text-gray-800">Krishnas Jewellers</p>
                <p className="text-lg text-gray-800">Email: nikunjnavadiya7@gmail.com</p>
                <p className="text-lg text-gray-800">Phone: +91 84603 61497</p>
                <p className="text-lg text-gray-800">We appreciate your understanding and cooperation with our return and refund policy. Thank you for choosing Krishnas Jewellers.</p>
            </div>
        </div>
    )
}

export default Refundpolicy;