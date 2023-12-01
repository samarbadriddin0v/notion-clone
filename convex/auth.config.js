export default {
  providers: [
    {
      domain: `${process.env.NEXT_PUBLIC_JWT_TEMPLATE_URL}`,
      applicationID: "convex",
    },
  ],
};
