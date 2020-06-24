"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const Stack = require("../lib/perftest-stack-airline-stack");
test('Stack Name should be picked from ENV variable and should be`airline-stack`', () => {
    const app = new cdk.App();
    //     // WHEN
    const stack = new Stack.PerftestStackAirlineStack(app, 'MyTestStack', { stackName: process.env.PERF_TEST_STACK_NAME });
    //     // // THEN
    expect(stack.stackName).toEqual(process.env.PERF_TEST_STACK_NAME);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZnRlc3Qtc3RhY2stYWlybGluZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyZnRlc3Qtc3RhY2stYWlybGluZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXNDO0FBQ3RDLDZEQUE4RDtBQUU5RCxJQUFJLENBQUMsNEVBQTRFLEVBQUUsR0FBRyxFQUFFO0lBQ2xGLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLGNBQWM7SUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDO0lBQzFILGlCQUFpQjtJQUNaLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCBhcyBleHBlY3RDREssIGhhdmVSZXNvdXJjZSB9IGZyb20gJ0Bhd3MtY2RrL2Fzc2VydCc7XG5pbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY29yZScpO1xuaW1wb3J0IFN0YWNrID0gcmVxdWlyZSgnLi4vbGliL3BlcmZ0ZXN0LXN0YWNrLWFpcmxpbmUtc3RhY2snKTtcblxudGVzdCgnU3RhY2sgTmFtZSBzaG91bGQgYmUgcGlja2VkIGZyb20gRU5WIHZhcmlhYmxlIGFuZCBzaG91bGQgYmVgYWlybGluZS1zdGFja2AnLCAoKSA9PiB7XG4gICAgICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICAvLyAgICAgLy8gV0hFTlxuICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IFN0YWNrLlBlcmZ0ZXN0U3RhY2tBaXJsaW5lU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snLCB7c3RhY2tOYW1lOiBwcm9jZXNzLmVudi5QRVJGX1RFU1RfU1RBQ0tfTkFNRX0pO1xuICAvLyAgICAgLy8gLy8gVEhFTlxuICAgICAgIGV4cGVjdChzdGFjay5zdGFja05hbWUpLnRvRXF1YWwocHJvY2Vzcy5lbnYuUEVSRl9URVNUX1NUQUNLX05BTUUpO1xuICAgfSk7Il19