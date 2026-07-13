window.JTC_CONFIG = Object.freeze({
  business: {
    name: "JTC Property Services",
    tagline: "Your Property. Our Priority.",
    phone: "+356 7959 9929",
    phoneHref: "+35679599929",
    email: "JTCpropcare@gmail.com",
    facebook: "https://facebook.com/share/1axM7kxuDa",
    address: "Emerald Court, Flat 1, Triq Patri G. Calleja, St Paul’s Bay, Malta",
    vatNumber: "MT 3038 2632",
    location: "Malta"
  },
  plans: {
    basic: { name: "Basic Property Care", priceMonthly: 60, visitsMonthly: 1, inspection: "Basic visual inspection", reporting: "Short photo update", bestFor: "General peace of mind", agreement: "yearly", vatIncluded: true },
    standard: { name: "Standard Property Care", priceMonthly: 120, visitsMonthly: 2, inspection: "Full property inspection", reporting: "Detailed photo report", bestFor: "Owners living abroad", agreement: "yearly", vatIncluded: true, featured: true },
    premium: { name: "Premium Property Care", priceMonthly: 160, visitsMonthly: 4, inspection: "Detailed inspection", reporting: "Priority report", bestFor: "High-value properties and frequent monitoring", agreement: "yearly", vatIncluded: true }
  },
  annualPackage: { priceYearly: 950, approximateSeparateValue: 1250, approximateSaving: 300, vatIncluded: true },
  cleaning: {
    regularRefresh: { name: "Regular Refresh Clean", price: 120, includedHours: 5, additionalHourlyRate: 20, description: "A lighter ongoing maintenance clean for routine refreshing." },
    deepClean: { name: "Deep Clean", price: 170, includedHours: 6, additionalHourlyRate: 22, description: "A detailed clean after vacancy or light neglect." },
    fullRefresh: { name: "Full Refresh Service", price: 200, duration: "Approximately 6-8 hours", description: "A complete refresh including agreed ironing, balconies, high-touch areas and pre-arrival preparation." },
    fullDeepClean: { name: "Full Deep Clean", price: 270, description: "An intensive clean for a property requiring a complete reset." }
  },
  access: { keyHoldingMonthly: 10, contractorAccess: 25, workingHoursCallout: 45, afterHoursCallout: 75 },
  technical: { handymanHourly: 35, plumbingHourly: 40, electricalHourly: 45, hvacHourly: 45, smallJobsMinimum: 10, smallJobsMaximum: 50, minimumBillingHours: 1, emergencyMultiplier: 1.5 },
  inspections: { twoHourInspection: 60, postTenantFrom: 50, preArrivalFrom: 40, damageReportFrom: 45, postDeparture: 60, applianceVisualFrom: 40 },
  addOns: { bulbScheduledMin: 10, bulbScheduledMax: 15, drainScheduledMin: 10, drainScheduledMax: 15, drainSeparateMin: 35, drainSeparateMax: 50 },
  administration: { billHandlingMonthlyMinimum: 25, billHandlingMonthlyMaximum: 30, correspondencePerItem: 15, contractorCoordinationPerJob: 35 },
  commercialTerms: {
    contractorHandlingPercentage: 15,
    vatIncludedUnlessStated: true,
    majorRepairsQuotedSeparately: true,
    licensedWorkQuotedSeparately: true,
    planAgreement: "yearly"
  },
  integrations: { quoteEndpoint: "", enquiryEndpoint: "", analytics: "", leadSource: "JTC website" }
});
