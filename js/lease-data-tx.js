/*  lease-data-tx.js — content model for the Texas (TAA) lease.
 *
 *  Form: TAA Official Statewide Form 25-A/B-1/B-2, Revised October 2025.
 *  All content lives here; js/app.js contains no lease copy.
 *
 *  Geometry: hotspot rectangles are percentages of the ORIGINAL page image
 *  (1700 x 2800 px), never screen pixels, so they track the image as it scales.
 *  A hotspot may carry more than one rect: provisions in this two-column form
 *  run from the foot of one column to the head of the next. Every rect is
 *  highlighted; the largest one is what the viewer zooms and pans to.
 *
 *  Privacy: every value below that names a person, a property, a company, an
 *  address, a date or a dollar amount is FICTIONAL and is drawn from FICTION.
 *  The same fictional values are baked into the page images themselves —
 *  nothing is masked in the browser.
 *
 *  needsContent: true marks a hotspot whose educational framing is NOT supported
 *  by the supplied material and must be written and approved before publication.
 *  contentFlag "priority" marks the ones with the largest consequence for a resident.
 */

export const FICTION = {
  "residentName": "Riley Morgan",
  "coResidentName": "Sam Delgado",
  "occupantName": "Nico Morgan",
  "ownerEntity": "Bluebonnet Commons Partners, L.P. (DE)",
  "propertyName": "Bluebonnet Commons",
  "propertyAddress": "2500 Ridgeline Commons Drive",
  "propertyCity": "Frisco",
  "propertyState": "TX",
  "propertyZip": "75034",
  "unitNumber": "318",
  "leaseStart": "October 10, 2026",
  "leaseEnd": "September 30, 2027",
  "monthlyRent": "$1,540.00",
  "proratedRent": "$1,092.96",
  "securityDeposit": "$400.00",
  "relettingCharge": "$1,309.00",
  "earlyTerminationFee": "$3,080.00",
  "returnedPaymentFee": "$75.00",
  "lateFee": "10% of one month's base rent",
  "noticeDays": "60"
};

export const KEY_TERMS = {
  "groups": [
    {
      "numbered": true,
      "title": "What every lease should contain",
      "note": "Ten clauses the source material identifies as essential to a residential lease. Use them as a checklist as you read your lease.",
      "items": [
        [
          "Parties",
          "Identifies the landlord and the tenant or tenants entering into the lease."
        ],
        [
          "Property description",
          "The full address and a clear description of the property being leased."
        ],
        [
          "Lease term",
          "The start date, the end date, and the total rental period."
        ],
        [
          "Rent",
          "The amount, the payment due date, accepted payment methods, and any late fees."
        ],
        [
          "Security deposit",
          "The amount, the conditions for its return, and when deductions may be made."
        ],
        [
          "Maintenance and repairs",
          "Each party's repair responsibilities and how repair requests are reported."
        ],
        [
          "Use of property",
          "Permitted uses and restrictions, such as subletting or running a business on site."
        ],
        [
          "Utilities and expenses",
          "Which utilities, services and property expenses belong to which party."
        ],
        [
          "Termination",
          "When either party may end the lease — notice requirements, delivery methods, notice periods."
        ],
        [
          "Signatures",
          "Landlord and tenants sign to acknowledge they have read, understood and agreed to the terms."
        ]
      ]
    },
    {
      "title": "Terms this lease defines for itself",
      "note": "Paragraph 1 of this Lease defines the following terms. Where the Lease defines a word, that definition governs how the rest of the document reads.",
      "items": [
        [
          "Residents",
          "Those listed under “Residents” on page 1 who sign this Lease and are authorised to live in the apartment."
        ],
        [
          "Occupants",
          "Those listed in this Lease who are also authorised to live in the apartment, but who do not sign it."
        ],
        [
          "Owner",
          "The owner only — not property managers or anyone else. The owner may be identified by an assumed name."
        ],
        [
          "Including",
          "“Including but not limited to.” Lists in this Lease are examples, not complete lists."
        ],
        [
          "Community Policies",
          "The written apartment rules and policies, including property signage and instructions for care of the property and amenities, with which you, your occupants and your guests must comply."
        ],
        [
          "Rent",
          "Monthly base rent plus additional monthly recurring fixed charges — so the figure in box C on page 1 is not the whole of what is due on the 1st."
        ],
        [
          "Lease",
          "This document, any addenda and attachments, the Community Policies, and the Special Provisions."
        ]
      ]
    },
    {
      "title": "Common types of lease agreements",
      "note": "These descriptions come from the supplied educational material and describe leases generally — they are not provisions of the document shown in this guide. Note that the sublease is deliberately left out: Paragraph 17 of this Lease states that you may not assign this Lease or sublet your apartment.",
      "items": [
        [
          "Month-to-month lease",
          "Automatically renews each month until either the landlord or the tenant gives notice to end it. With proper notice, terms including rent may be updated as applicable law allows."
        ],
        [
          "Residential lease",
          "Used for housing such as houses, apartments or condominiums. Sets out the rights, responsibilities and expectations of landlord and tenant during the rental period."
        ],
        [
          "Corporate lease",
          "A rental contract between a property owner and a business rather than an individual. The company is responsible for the lease terms and decides who will occupy the property."
        ]
      ]
    }
  ]
};

export const SUMMARY = [
  {
    "id": "dates",
    "title": "Know Your Dates",
    "items": [
      [
        "Lease term",
        "Begins October 10, 2026 and ends at 11:59 p.m. on September 30, 2027 (Lease Details B)."
      ],
      [
        "Automatic renewal",
        "Paragraph 4 renews the Lease month-to-month unless either party gives the written notice box F requires. If the notice-days blank is not filled in, at least 30 days is required."
      ],
      [
        "Rent due date",
        "On or before the 1st of each month, without demand. Paragraph 3 states there are no exceptions."
      ],
      [
        "Late fee trigger",
        "Rent unpaid by 11:59 p.m. on the 3rd day of the month draws the late fee set in box G."
      ],
      [
        "First month prorated",
        "$1,092.96 for October 10–31, 2026 — 22 days at $49.68 a day (Lease Details D)."
      ],
      [
        "Convictions and registration",
        "Paragraph 10.4 requires notice within 15 days."
      ]
    ]
  },
  {
    "id": "money",
    "title": "Know Your Financial Responsibilities",
    "items": [
      [
        "Monthly base rent",
        "$1,540.00 (Lease Details C). Paragraph 1.6 adds monthly recurring fixed charges to this to make “Rent.”"
      ],
      [
        "Monthly recurring charges",
        "Trash $10.00, pest control $6.00, and a $6.00 stormwater, rent and ancillary billing fee (Lease Details L)."
      ],
      [
        "Security deposit",
        "$400.00, due on or before the day the Lease is signed, and not applicable to Rent without written consent (Lease Details E, Paragraph 5)."
      ],
      [
        "Late fee",
        "10% of one month's base rent (Lease Details G)."
      ],
      [
        "Returned or rejected payment",
        "$75.00, plus late fees if applicable (Lease Details H, Paragraph 3.4)."
      ],
      [
        "Reletting charge",
        "$1,309.00. The box caps it at 85% of the highest monthly Rent during the term (Lease Details I, Paragraph 7.1)."
      ],
      [
        "Early termination fee",
        "$3,080.00 with 60 days' notice, where the option applies (Lease Details J, Paragraph 7.2)."
      ],
      [
        "Animal violation charges",
        "$100.00 initially and $10.00 per day per animal (Lease Details K, Paragraph 12.2)."
      ],
      [
        "Required liability insurance",
        "$300,000.00 per occurrence (Lease Details N, Paragraph 6)."
      ],
      [
        "Utility connection or transfer fee",
        "$50.00, payable within 5 days of written notice (Lease Details M, Paragraph 3.5)."
      ]
    ]
  },
  {
    "id": "responsibilities",
    "title": "Know Your Resident Responsibilities",
    "items": [
      [
        "Care of the apartment",
        "Paragraph 9 makes you responsible for loss, damage, fines and repair costs caused by a Lease violation or by conduct of you, your occupants, your guests or your invitees."
      ],
      [
        "Community Policies",
        "Paragraph 10 makes them part of the Lease, and allows changes that take effect immediately under the conditions it states."
      ],
      [
        "Reporting problems",
        "Paragraph 15.2 requires prompt written notice of heating and cooling problems, leaks, moisture, mould, electrical problems, broken or missing locks or latches, and any hazard."
      ],
      [
        "Reporting safety devices",
        "Paragraph 18.2 requires you to report any missing, malfunctioning or defective security device, smoke alarm or detector immediately."
      ],
      [
        "Requests in writing",
        "Paragraph 15.1 requires requests to be written and delivered to the designated representative, except for fair-housing requests and situations of imminent danger."
      ],
      [
        "Animals",
        "Paragraph 12 allows no animal of any kind, even temporarily, without written permission and a signed Animal Addendum."
      ],
      [
        "No assignment or subletting",
        "Paragraph 17 states you may not assign this Lease or sublet your apartment, and addresses short-term rental listings directly."
      ],
      [
        "Joint and several liability",
        "Paragraph 22 makes each resident responsible for all Lease obligations, not a share of them."
      ]
    ]
  },
  {
    "id": "notice",
    "title": "Know Your Notice Requirements",
    "items": [
      [
        "Move-out notice",
        "60 days' written notice (Lease Details F). Paragraph 25 requires it even if the Lease has become month-to-month."
      ],
      [
        "Changing the move-out date",
        "Paragraph 25 states the date cannot be changed unless both sides agree in writing."
      ],
      [
        "Notice to one is notice to all",
        "Paragraph 21 states notice to any Resident is notice to all Residents, and a request from any Resident is a request from all."
      ],
      [
        "Electronic notice",
        "Paragraphs 21.1 and 21.2 allow notice by email — including a Notice to Vacate — to the address you gave during the application process."
      ],
      [
        "Only staff in writing can change the Lease",
        "Paragraph 24 states representatives have no authority to waive, amend or terminate the Lease unless it is in writing and signed."
      ]
    ]
  },
  {
    "id": "moveout",
    "title": "Know Before You Move Out",
    "items": [
      [
        "Cleaning",
        "Paragraph 26.1 lists what must be cleaned and makes you liable for reasonable cleaning charges if it is not done."
      ],
      [
        "Move-out inspection",
        "Paragraph 26.2 states a joint inspection is optional for the community, and that any figure quoted to you is subject to correction before the final accounting."
      ],
      [
        "Itemised accounting",
        "Paragraph 5.1 requires advance notice of move-out under Paragraph 25 and a written forwarding address before a written description and itemised list of charges or a refund is provided. At Cortland this statement is the Final Account Statement, or FAS."
      ],
      [
        "Surrender",
        "Paragraph 27 treats the apartment as surrendered once the move-out date has passed and no one is living there, or once keys and access devices are turned in — whichever happens first."
      ],
      [
        "Property left behind",
        "Paragraph 27.2 allows removal or storage of property left in the apartment or common areas after surrender, abandonment or eviction."
      ]
    ]
  }
];

export const LEASE = [
  {
    "page": 1,
    "category": "Basic Lease Information",
    "pageTitle": "Moving In: Lease Details and Dates",
    "image": "assets/tx/lease-page-01-sanitized.webp",
    "pageTextUrl": "assets/tx/text/lease-page-01.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "parties",
        "paragraphRef": "Parties (page 1)",
        "title": "Parties and Occupants",
        "meaning": "Everyone who signs this Lease is listed under “Residents.” Anyone who will live in the apartment without signing is listed under “Occupants.” The owner is named on the right.",
        "definitionTitle": "Parties",
        "definition": "Names of the residents signing the lease.",
        "definition2Title": "Occupants",
        "definition2": "Anyone who will be living in the apartment, including children.",
        "whyItMatters": "Only the people listed here are authorised to live in the apartment, and only the people who sign take on the Lease obligations.",
        "example": "Riley Morgan and Sam Delgado sign as Residents. Nico Morgan is listed as an Occupant. The owner is Bluebonnet Commons Partners, L.P.",
        "source": "WIL: Parties, Occupants | Lease Details, Parties block",
        "needsContent": false,
        "rects": [
          {
            "x": 5.59,
            "y": 11.36,
            "width": 88.53,
            "height": 17.5
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "apartment",
        "paragraphRef": "Lease Details A (Par. 2)",
        "title": "The Apartment",
        "meaning": "Box A identifies the exact apartment being leased: street address, apartment number, city, state and ZIP.",
        "definitionTitle": "Property description",
        "definition": "The full address and a clear description of the property being leased.",
        "whyItMatters": "This is the specific home the Lease covers. Every other provision in the document refers back to it.",
        "example": "Apartment 318 at 2500 Ridgeline Commons Drive, Frisco, TX 75034.",
        "source": "WIL: Property Description | Lease Details A, Paragraph 2",
        "needsContent": false,
        "rects": [
          {
            "x": 5.88,
            "y": 30.79,
            "width": 88.18,
            "height": 5.39
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "lease-term",
        "paragraphRef": "Lease Details B",
        "title": "Initial Lease Term",
        "meaning": "Box B gives the date the Lease begins and the date it ends. The end date runs to 11:59 p.m. on the day shown.",
        "definitionTitle": "Lease term",
        "definition": "The agreed-upon period of time in which the lease is in effect.",
        "whyItMatters": "The term sets how long you are committed and when notice obligations and renewal provisions come into play.",
        "example": "Begins October 10, 2026; ends at 11:59 p.m. on September 30, 2027.",
        "source": "WIL: Lease term | Lease Details B",
        "needsContent": false,
        "rects": [
          {
            "x": 5.88,
            "y": 36.29,
            "width": 88.18,
            "height": 2.39
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "rent-prorated",
        "paragraphRef": "Lease Details C and D (Par. 3)",
        "title": "Monthly Base Rent and Prorated Rent",
        "meaning": "Box C is the monthly base rent. Box D is the prorated amount charged for a partial first month, because the term starts part-way through the month.",
        "definitionTitle": "Rent",
        "definition": "The rent amount, payment due date, accepted payment methods, and any late fees.",
        "definition2Title": "Prorated",
        "definition2": "The amount of rent charged when the first or last month of a lease is less than a full month.",
        "whyItMatters": "Monthly base rent is only part of what the Lease calls “Rent” — box L adds monthly recurring fixed charges on top.",
        "example": "Monthly base rent is $1,540.00. Because the term begins on October 10, the first payment is prorated to $1,092.96 — 22 days at $49.68 per day — and full rent starts on November 1.",
        "source": "WIL: Rent, Prorated | Lease Details C & D, Paragraph 3",
        "needsContent": false,
        "rects": [
          {
            "x": 5.88,
            "y": 38.79,
            "width": 23.59,
            "height": 11.79
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "security-deposit",
        "paragraphRef": "Lease Details E (Par. 5)",
        "title": "Security Deposit",
        "meaning": "Box E is the total security deposit for all residents. The box notes that any animal deposit is handled separately in an Animal Addendum.",
        "definitionTitle": "Security deposit",
        "definition": "A deposit held by the landlord for the term of the lease. It can be used by the landlord for any damage to the apartment, or for any unpaid rent or utility bills.",
        "whyItMatters": "The deposit is held for the term of the Lease and may be drawn on for damage or for money owed, in accordance with the Lease and as allowed by law.",
        "example": "The security deposit is $400.00.",
        "source": "WIL: Security Deposit | Lease Details E, Paragraph 5",
        "needsContent": false,
        "rects": [
          {
            "x": 29.59,
            "y": 38.79,
            "width": 24.53,
            "height": 11.79
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "move-out-notice-box",
        "paragraphRef": "Lease Details F (Par. 4)",
        "title": "Notice of Termination or Intent to Move Out",
        "meaning": "Box F sets the minimum written notice you must give to end the Lease at the end of the initial term or during a renewal period. The box also states that if the number of days is left blank, at least 30 days' notice is required.",
        "definitionTitle": "Notice to vacate",
        "definition": "A formal notice given to the landlord by a resident stating they intend to end occupancy of the premises and not renew the lease.",
        "definition2Title": "Termination",
        "definition2": "Any situation in which either party to the rental agreement — resident or landlord — decides to end the agreement. Eviction, non-renewal and vacating for cause are all types of termination.",
        "whyItMatters": "This is the number that decides how early you must tell the community you are leaving. Missing it has consequences elsewhere in the document.",
        "example": "This Lease requires a minimum of 60 days' written notice.",
        "source": "WIL: Notice to vacate, Termination | Lease Details F, Paragraph 4",
        "needsContent": false,
        "rects": [
          {
            "x": 54.24,
            "y": 38.79,
            "width": 39.82,
            "height": 11.79
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "late-fees",
        "paragraphRef": "Lease Details G and H (Par. 3.3, 3.4)",
        "title": "Late Fees and Returned Payment Fee",
        "meaning": "Box G sets the late fee and the day of the month after which rent is late. Box H sets the fee for a returned check or a rejected electronic payment.",
        "definitionTitle": "Rent",
        "definition": "The rent amount, payment due date, accepted payment methods, and any late fees.",
        "whyItMatters": "Both figures are fixed here in the Lease Details and are referred to, rather than repeated, by the paragraphs later in the document.",
        "example": "An initial late fee of 10% of one month's base rent applies if rent is unpaid by 11:59 p.m. on the 3rd day of the month. A returned or rejected payment costs $75.00.",
        "source": "WIL: Rent (late fees) | Lease Details G & H, Paragraphs 3.3 and 3.4",
        "needsContent": false,
        "rects": [
          {
            "x": 5.88,
            "y": 50.68,
            "width": 88.18,
            "height": 8.46
          },
          {
            "x": 5.88,
            "y": 59.25,
            "width": 23.59,
            "height": 4.46
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "charges",
        "paragraphRef": "Lease Details I, J and K (Par. 7.1, 7.2, 12.2)",
        "title": "Reletting Charge, Early Termination Option, and Violation Charges",
        "meaning": "Box I sets the reletting charge, which the box itself caps at 85% of the highest monthly Rent during the Lease term. Box J sets the early termination fee and the notice required to use that option. Box K sets the animal violation charges.",
        "whyItMatters": "These are the three money figures attached to leaving early or breaking a rule, and each is defined by a paragraph later in the Lease.",
        "example": "Reletting charge $1,309.00; early termination fee $3,080.00 with 60 days' notice; animal violation charges of $100.00 initially and $10.00 per day per animal.",
        "source": "Lease Details I, J & K — Paragraphs 7.1, 7.2 and 12.2",
        "needsContent": true,
        "flagNote": "No WIL entry covers reletting charges, early termination fees or violation charges. The text above restates the boxes only; the educational framing needs copy.",
        "rects": [
          {
            "x": 29.59,
            "y": 59.25,
            "width": 28.65,
            "height": 12.57
          },
          {
            "x": 58.35,
            "y": 59.25,
            "width": 35.71,
            "height": 12.57
          },
          {
            "x": 5.88,
            "y": 63.82,
            "width": 23.59,
            "height": 8.0
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "additional-rent",
        "paragraphRef": "Lease Details L, M and N (Par. 3.5)",
        "title": "Additional Rent, Utilities, and Other Charges",
        "meaning": "Box L lists the monthly recurring fixed charges billed on top of base rent. Box M covers variable utilities and the utility connection or transfer fee. Box N covers access devices and the required insurance liability limit.",
        "definitionTitle": "Utilities and expenses",
        "definition": "Which utilities, services, and other property-related expenses are the responsibility of the landlord or the resident.",
        "whyItMatters": "The Lease defines “Rent” as monthly base rent plus these monthly recurring fixed charges, so box L is part of what is due on the 1st — not a separate bill.",
        "example": "Trash $10.00, pest control $6.00, and a $6.00 stormwater, rent and ancillary billing fee are billed monthly. The utility connection or transfer fee is $50.00 and the required insurance liability limit is $300,000.00 per occurrence.",
        "source": "WIL: Utilities and Expenses (partial) | Lease Details L, M & N, Paragraph 3.5",
        "needsContent": true,
        "flagNote": "WIL covers utilities in general terms only. The distinction between monthly recurring fixed charges (part of Rent) and variable utilities needs approved copy.",
        "rects": [
          {
            "x": 5.88,
            "y": 71.93,
            "width": 88.18,
            "height": 12.36
          },
          {
            "x": 5.88,
            "y": 84.39,
            "width": 88.18,
            "height": 4.18
          },
          {
            "x": 5.88,
            "y": 88.68,
            "width": 88.18,
            "height": 4.54
          }
        ],
        "zoom": 2.0
      }
    ]
  },
  {
    "page": 2,
    "category": "Rent & Money",
    "pageTitle": "Rent, Deposits, Insurance, and Utilities",
    "image": "assets/tx/lease-page-02-sanitized.webp",
    "pageTextUrl": "assets/tx/text/lease-page-02.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "definitions",
        "paragraphRef": "Paragraphs 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6 and 1.7",
        "title": "Definitions",
        "leaseLanguage": "Definitions. The following terms are commonly used in this Lease:",
        "meaning": "Paragraph 1 defines the terms used throughout the document: Residents, Occupants, Owner, Including, Community Policies, Rent and Lease.",
        "whyItMatters": "Two of these change how the rest of the document reads. “Rent” means base rent plus monthly recurring fixed charges, and “Including” means “including but not limited to,” so lists in this Lease are examples, not complete lists.",
        "source": "Lease Paragraphs 1 through 1.7",
        "needsContent": true,
        "flagNote": "No WIL entry covers a definitions paragraph. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 3.61,
            "width": 43.35,
            "height": 16.7
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "the-apartment",
        "paragraphRef": "Paragraphs 2, 2.1, 2.2 and 2.3",
        "title": "The Apartment: Access, Measurements, Representations",
        "leaseLanguage": "Apartment. You are leasing the apartment listed above for use as a private residence only.",
        "meaning": "Paragraph 2 states the apartment is leased for use as a private residence only, describes the access devices you receive, and notes that dimensions given to you are approximate and that designations or accreditations may change.",
        "definitionTitle": "Use of property",
        "definition": "The permitted uses of the property and any restrictions, such as subletting or operating a business from the premises.",
        "whyItMatters": "The private-residence restriction and the access-device list both matter later: Paragraph 27 treats turning in those devices as surrendering the apartment.",
        "source": "WIL: Use of Property (partial) | Lease Paragraphs 2 through 2.3",
        "needsContent": true,
        "flagNote": "WIL: Use of Property is a general entry. The access-device and measurement sub-paragraphs need copy.",
        "rects": [
          {
            "x": 5.53,
            "y": 20.6,
            "width": 43.35,
            "height": 12.55
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "rent",
        "paragraphRef": "Paragraphs 3 and 3.1",
        "title": "Rent and How You Pay It",
        "leaseLanguage": "Rent. You must pay your Rent on or before the 1st day of each month (due date) without demand. There are no exceptions regarding the payment of Rent, and you agree not paying Rent on or before the 1st of each month is a material breach …",
        "meaning": "Rent is due on or before the 1st of each month without demand. You pay by the method and place the community specifies; cash is not acceptable without prior written permission, and you cannot withhold or offset Rent unless the law allows it.",
        "definitionTitle": "Rent",
        "definition": "The rent amount, payment due date, accepted payment methods, and any late fees.",
        "whyItMatters": "Paragraph 3 states that not paying Rent on or before the 1st is a material breach of the Lease, and says there are no exceptions.",
        "source": "WIL: Rent | Lease Paragraphs 3 and 3.1",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 33.43,
            "width": 43.35,
            "height": 11.09
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "application-of-payments",
        "paragraphRef": "Paragraph 3.2",
        "title": "Application of Payments",
        "leaseLanguage": "Application of Payments. Payment of each sum due is an independent covenant, which means payments are due regardless of our performance. …",
        "meaning": "Paragraph 3.2 says each sum due is an independent covenant — payments are due regardless of the community's performance — and that money received may be applied first to unpaid obligations and then to accrued rent, at the community's option and without notice.",
        "whyItMatters": "A payment you intend as rent may be applied to an older unpaid charge first, which can leave rent showing as unpaid.",
        "source": "Lease Paragraph 3.2",
        "needsContent": true,
        "flagNote": "No WIL entry covers application of payments. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 44.81,
            "width": 43.35,
            "height": 10.86
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "late-returned",
        "paragraphRef": "Paragraphs 3.3 and 3.4",
        "title": "Late Fees and Returned Payment Fee",
        "leaseLanguage": "Late Fees. If we don’t receive your monthly base rent in full when it’s due, you must pay late fees as outlined in Lease Details.",
        "meaning": "If base rent is not received in full when due, the late fees set out in Lease Details apply. A returned check or rejected electronic payment carries the fee in Lease Details, plus late fees, until payment is received in an acceptable form.",
        "definitionTitle": "Rent",
        "definition": "The rent amount, payment due date, accepted payment methods, and any late fees.",
        "whyItMatters": "Both paragraphs point back to the Lease Details boxes on page 1 rather than stating amounts here.",
        "example": "Rent unpaid by 11:59 p.m. on the 3rd carries a 10% initial late fee. A rejected payment adds $75.00.",
        "source": "WIL: Rent (late fees) | Lease Paragraphs 3.3 and 3.4",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 55.95,
            "width": 43.35,
            "height": 6.13
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "utilities-services",
        "paragraphRef": "Paragraph 3.5",
        "title": "Utilities and Services",
        "leaseLanguage": "Utilities and Services. You’ll pay for all utilities and services, related deposits, and any charges or fees when they are due and as outlined in this Lease. …",
        "meaning": "Paragraph 3.5 sets out which utilities and services you pay for and how they are billed.",
        "definitionTitle": "Utilities and expenses",
        "definition": "Which utilities, services, and other property-related expenses are the responsibility of the landlord or the resident.",
        "whyItMatters": "Utilities billed through the community appear on the monthly statement alongside rent, so an unpaid utility balance can become an unpaid Rent balance.",
        "source": "WIL: Utilities and Expenses | Lease Paragraph 3.5",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 62.37,
            "width": 43.35,
            "height": 21.95
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "lease-changes",
        "paragraphRef": "Paragraph 3.6",
        "title": "Lease Changes",
        "leaseLanguage": "Lease Changes. Lease changes are only allowed during the Lease term or renewal period if governed by Par. 10, specified in Special Provisions in Par. 32, or by a written addendum or amendment signed by you and us. …",
        "meaning": "Paragraph 3.6 states that Lease changes are only effective if agreed in writing.",
        "source": "Lease Paragraph 3.6",
        "needsContent": true,
        "flagNote": "No WIL entry. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 84.61,
            "width": 43.35,
            "height": 11.1
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "automatic-renewal",
        "paragraphRef": "Paragraph 4",
        "title": "Automatic Lease Renewal and Notice of Termination",
        "leaseLanguage": "Automatic Lease Renewal and Notice of Termination. This Lease will automatically renew month-to-month unless either party gives written notice of termination or intent to move out as required by Par. 25 and specified on page 1. …",
        "meaning": "Paragraph 4 explains what happens at the end of the initial term if neither side gives notice, and ties the required notice back to box F on page 1.",
        "definitionTitle": "Month-to-month lease",
        "definition": "A lease that automatically renews each month until either the landlord or the resident gives notice to end it. With proper notice, the terms of the lease — including rent — may be updated as applicable law allows.",
        "definition2Title": "Termination",
        "definition2": "Any situation in which either party to the rental agreement — resident or landlord — decides to end the agreement. Eviction, non-renewal and vacating for cause are all types of termination.",
        "whyItMatters": "If notice is not given in time, the Lease does not simply end on the last day of the term.",
        "example": "This Lease requires 60 days' written notice.",
        "source": "WIL: Month-to-Month, Termination | Lease Paragraph 4",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 2.18,
            "width": 43.35,
            "height": 4.91
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "security-deposit-refunds",
        "paragraphRef": "Paragraphs 5 and 5.1",
        "title": "Security Deposit, Refunds and Deductions",
        "leaseLanguage": "Security Deposit. The total security deposit for all residents is due on or before the date this Lease is signed. Any animal deposit will be designated in an animal addendum. Security deposits may not be applied to Rent without our prior written consent.",
        "meaning": "The total security deposit for all residents is due on or before the day the Lease is signed and may not be applied to Rent without written consent. To receive a written description and itemised list of charges or a refund, you must give advance notice of move-out under Paragraph 25 and a forwarding address in writing.",
        "definitionTitle": "Security deposit",
        "definition": "A deposit held by the landlord for the term of the lease. It can be used by the landlord for any damage to the apartment, or for any unpaid rent or utility bills.",
        "definition2Title": "Wear and tear",
        "definition2": "The acceptable amount of damage that does not trigger a monetary penalty deducted from the resident's security deposit upon vacating the apartment.",
        "whyItMatters": "The refund depends on two things you have to do: give the move-out notice the Lease requires, and give a forwarding address in writing.",
        "example": "The deposit is $400.00. Any animal deposit would be set out separately in an Animal Addendum.",
        "importantToKnow": "The TAA form calls the closing statement an “itemized list of charges” or “itemized accounting.” At Cortland this is the Final Account Statement, or FAS.",
        "source": "WIL: Security Deposit, Wear and tear, FAS | Lease Paragraphs 5 and 5.1",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 7.37,
            "width": 43.35,
            "height": 19.03
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "insurance",
        "paragraphRef": "Paragraph 6",
        "title": "Insurance",
        "leaseLanguage": "Insurance. Our insurance doesn’t cover the loss of or damage to your personal property. You will be required to have liability insurance as specified in this Lease unless otherwise prohibited by law. …",
        "meaning": "Paragraph 6 states that the community's insurance does not cover loss of or damage to your personal property, and that you are required to carry liability insurance as specified in the Lease unless the law prohibits it.",
        "whyItMatters": "The required liability limit is set in box N on page 1.",
        "example": "The required insurance liability limit is $300,000.00 per occurrence.",
        "source": "Lease Paragraph 6 | Lease Details N",
        "needsContent": true,
        "flagNote": "The supplied WIL material contains no insurance entry — the same gap flagged on the Georgia lease at Paragraph 8.",
        "rects": [
          {
            "x": 51.12,
            "y": 26.68,
            "width": 43.35,
            "height": 9.87
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "reletting-termination-delay",
        "paragraphRef": "Paragraphs 7, 7.1, 7.2, 7.3, 8 and 8.1",
        "title": "Reletting, Early Lease Termination, and Delay of Occupancy",
        "leaseLanguage": "Reletting and Early Lease Termination. This Lease may not be terminated early except as provided in this Lease.",
        "meaning": "Paragraph 7 states the Lease may not be terminated early except as the Lease provides. Paragraph 7.1 sets the reletting charge and when it applies. Paragraph 7.2 is the early termination option procedure. Paragraph 7.3 notes rights that may exist under Texas law in certain situations. Paragraph 8 covers delay of occupancy and the right to terminate in writing if the community gives notice of a delay.",
        "whyItMatters": "Paragraph 7.1 says the reletting charge is not a cancellation fee and does not release you from the Lease.",
        "example": "The reletting charge is $1,309.00 — the Lease Details box caps it at 85% of the highest monthly Rent during the term. The early termination fee is $3,080.00 with 60 days' notice.",
        "source": "Lease Paragraphs 7 through 8.1",
        "needsContent": true,
        "flagNote": "The WIL Lease Assignment and Sublease entries are deliberately NOT used here — Paragraph 17 of this Lease prohibits assignment and subletting outright. Paragraph 7.3 cites specific Texas statutory termination rights; quote them, do not paraphrase.",
        "rects": [
          {
            "x": 51.12,
            "y": 36.83,
            "width": 43.35,
            "height": 56.69
          }
        ],
        "zoom": 1.4
      }
    ]
  },
  {
    "page": 3,
    "category": "While You're Living There",
    "pageTitle": "Conduct, Animals, Parking, and Entry",
    "image": "assets/tx/lease-page-03-sanitized.webp",
    "pageTextUrl": "assets/tx/text/lease-page-03.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "care-of-unit",
        "paragraphRef": "Paragraph 9",
        "title": "Care of Unit and Damages",
        "leaseLanguage": "Care of Unit and Damages. You must promptly pay or reimburse us for loss, damage, consequential damages, government fines or charges, or cost of repairs or service in the apartment community because of a Lease violation …",
        "meaning": "Paragraph 9 makes you responsible for paying or reimbursing the community for loss, damage, fines, or the cost of repairs caused by a Lease violation, or by improper use, negligence or other conduct by you, your occupants, your guests or your invitees.",
        "definitionTitle": "Maintenance and repairs",
        "definition": "The maintenance and repair responsibilities of both the landlord and the resident, including the process for reporting repair requests.",
        "definition2Title": "Responsibilities of the parties",
        "definition2": "The obligations that belong to the owner and the obligations that belong to the resident. Any violation by a guest falls under the responsibility of the resident.",
        "whyItMatters": "Responsibility reaches beyond your own conduct — the paragraph names occupants, guests and invitees.",
        "source": "WIL: Maintenance and Repairs, Responsibilities of the Parties | Lease Paragraph 9",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 3.36,
            "width": 43.35,
            "height": 16.93
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "community-policies",
        "paragraphRef": "Paragraph 10",
        "title": "Community Policies",
        "leaseLanguage": "Community Policies. Community Policies become part of this Lease and must be followed. We may make changes, including additions, to our written Community Policies, and those changes can become effective immediately if the Community Policies are distributed and applicable to all units in the apartment community …",
        "meaning": "Community Policies are part of the Lease and must be followed. The community may change or add to them, and those changes can take effect immediately if they are distributed, apply to all units, and do not change the dollar amounts owed under the Lease.",
        "definitionTitle": "Common area",
        "definition": "Areas of the apartment community — such as the gym, laundry rooms, clubhouse and outdoor spaces — that are for common use.",
        "definition2Title": "Use of property",
        "definition2": "The permitted uses of the property and any restrictions, such as subletting or operating a business from the premises.",
        "whyItMatters": "Policies can change during your term without the Lease itself being amended, so long as the stated conditions are met.",
        "source": "WIL: Common Area, Use of Property | Lease Paragraph 10",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 20.57,
            "width": 43.35,
            "height": 6.11
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "photo-video",
        "paragraphRef": "Paragraph 10.1",
        "title": "Photo and Video Release",
        "leaseLanguage": "Photo/Video Release. You give us permission to use any photograph, likeness, image or video taken of you while you are using property common areas or participating in any event sponsored by us.",
        "meaning": "Paragraph 10.1 gives the community permission to use any photograph, likeness, image or video taken of you while you are using common areas or taking part in an event it sponsors.",
        "source": "Lease Paragraph 10.1",
        "needsContent": true,
        "flagNote": "No WIL entry and no Georgia equivalent. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 26.97,
            "width": 43.35,
            "height": 4.13
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "disclosure-information",
        "paragraphRef": "Paragraph 10.2",
        "title": "Disclosure of Information",
        "leaseLanguage": "Disclosure of Information. At our sole option and as allowed by law, we may, but are not obligated to, share and use information related to this Lease for law-enforcement, governmental, or business purposes. …",
        "meaning": "Paragraph 10.2 says the community may — but is not obliged to — share and use information related to the Lease for law-enforcement, governmental or business purposes, as the law allows, and that you authorise utility providers to give it information about connections and disconnections at your apartment.",
        "source": "Lease Paragraph 10.2",
        "needsContent": true,
        "flagNote": "No WIL entry. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 31.38,
            "width": 43.35,
            "height": 7.11
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "guests",
        "paragraphRef": "Paragraph 10.3",
        "title": "Guests",
        "leaseLanguage": "Guests. We may exclude from the apartment community any guests or others who, in our sole judgment, have been violating the law, violating this Lease or our Community Policies, or disturbing other residents, neighbors, visitors, or owner representatives. …",
        "meaning": "Paragraph 10.3 lets the community exclude from the apartment community any guest or other person who, in its sole judgment, has been breaking the law, violating the Lease or the Community Policies, or disturbing other residents, neighbours, visitors or owner representatives.",
        "definitionTitle": "Occupants",
        "definition": "Anyone who will be living in the apartment, including children.",
        "whyItMatters": "Anyone who is not listed as a Resident or an Occupant is a guest, and this paragraph governs them.",
        "example": "Nico Morgan is listed as an Occupant, so this paragraph does not apply to them. A visiting friend is a guest.",
        "source": "WIL: Occupants | Lease Paragraph 10.3",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 38.77,
            "width": 43.35,
            "height": 12.51
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "convictions-odors",
        "paragraphRef": "Paragraphs 10.4 and 10.5",
        "title": "Notice of Convictions, Registration, Odors and Noise",
        "leaseLanguage": "Notice of Convictions and Registration. You must notify us within 15 days if you or any of your occupants: (A) are convicted of any felony, (B) are convicted of any misdemeanor involving a controlled substance, violence to another person, or destruction of property, or (C) register …",
        "meaning": "Paragraph 10.4 requires you to tell the community within 15 days if you or an occupant is convicted of a felony, is convicted of a misdemeanour involving a controlled substance, violence to another person or destruction of property, or registers as a sex offender. Paragraph 10.5 states that cooking odours, everyday noise and sounds of repair, renovation or construction are a normal part of multifamily living.",
        "source": "Lease Paragraphs 10.4 and 10.5",
        "needsContent": true,
        "flagNote": "No WIL entries. Restatement only. 10.4 carries a deadline — confirm the framing before publication.",
        "rects": [
          {
            "x": 5.53,
            "y": 51.57,
            "width": 43.35,
            "height": 15.49
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "conduct",
        "paragraphRef": "Paragraphs 11 and 11.1",
        "title": "Conduct and Prohibited Conduct",
        "leaseLanguage": "Conduct. You agree to communicate and conduct yourself in a lawful, courteous and reasonable manner at all times when interacting with us, our representatives and other residents or occupants. …",
        "meaning": "Paragraph 11 requires you to communicate and behave lawfully, courteously and reasonably with staff, representatives and other residents. Paragraph 11.1 lists conduct that is prohibited for you, your occupants and your guests.",
        "definitionTitle": "Prohibited conduct",
        "definition": "The actions prohibited for residents on the property, including inside their own apartment homes and in shared spaces.",
        "whyItMatters": "Paragraph 11 states that unlawful, discourteous or unreasonable communication or conduct is itself a breach of the Lease.",
        "source": "WIL: Prohibited Conduct | Lease Paragraphs 11 and 11.1",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 3.39,
            "width": 43.35,
            "height": 28.4
          },
          {
            "x": 5.53,
            "y": 67.35,
            "width": 43.35,
            "height": 28.37
          }
        ],
        "zoom": 1.94
      },
      {
        "id": "animals",
        "paragraphRef": "Paragraphs 12, 12.1 and 12.2",
        "title": "Animals, Removal, and Violation Charges",
        "leaseLanguage": "Animals. No living creatures of any kind are allowed, even temporarily, anywhere in the apartment or apartment community unless we’ve given written permission. …",
        "meaning": "No animal of any kind is allowed anywhere in the apartment or the community, even temporarily, without written permission. If an animal is allowed you sign an Animal Addendum and pay the deposit, fees and additional monthly rent it sets out. Paragraph 12.1 covers removal of an unauthorised animal; Paragraph 12.2 covers the charges that apply if the animal rules are broken.",
        "definitionTitle": "Animal restrictions",
        "definition": "The restrictions on animals on the property. For pets there may be an additional Pet Addendum to reference.",
        "whyItMatters": "Violation charges run from the date the animal was brought into the apartment until it is removed — not from the date it is discovered.",
        "example": "Animal violation charges are $100.00 initially and $10.00 per day per animal.",
        "source": "WIL: Animal Restrictions | Lease Paragraphs 12, 12.1 and 12.2",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 32.08,
            "width": 43.35,
            "height": 38.75
          }
        ],
        "zoom": 1.42
      },
      {
        "id": "parking",
        "paragraphRef": "Paragraph 13",
        "title": "Parking",
        "leaseLanguage": "Parking. You may not be guaranteed parking. We may regulate the time, manner, and place of parking of all motorized vehicles and other modes of transportation, including bicycles and scooters, in this Lease. …",
        "meaning": "Paragraph 13 states that parking may not be guaranteed and that the community may regulate the time, manner and place of parking for all motorised vehicles and other modes of transport, including bicycles and scooters.",
        "definitionTitle": "Parking",
        "definition": "The parking provisions, rules, and regulations.",
        "source": "WIL: Parking | Lease Paragraph 13",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 71.12,
            "width": 43.35,
            "height": 7.11
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "when-we-may-enter",
        "paragraphRef": "Paragraph 14",
        "title": "When We May Enter",
        "leaseLanguage": "When We May Enter. If you or any other resident, guest or occupant is present, then repair or service persons, contractors, law officers, government representatives, lenders, appraisers, prospective residents or buyers, insurance agents, persons authorized to enter under your rental application, or our representatives may peacefully …",
        "meaning": "Paragraph 14 lists who may enter the apartment and on what terms — repair and service people, contractors, law officers, government representatives, lenders, appraisers, prospective residents or buyers, insurance agents and community representatives — peacefully, at reasonable times, for reasonable business purposes.",
        "definitionTitle": "Entering the home",
        "definition": "The landlord's right to enter the apartment home, the circumstances, and the required communications.",
        "whyItMatters": "The paragraph distinguishes entry while someone is present from entry when no one is home.",
        "source": "WIL: Entering the Home | Lease Paragraph 14",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 78.51,
            "width": 43.35,
            "height": 17.21
          }
        ],
        "zoom": 2.0
      }
    ]
  },
  {
    "page": 4,
    "category": "Maintenance & Safety",
    "pageTitle": "Repairs, Safety, and Condition of the Unit",
    "image": "assets/tx/lease-page-04-sanitized.webp",
    "pageTextUrl": "assets/tx/text/lease-page-04.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "requests-repairs",
        "paragraphRef": "Paragraphs 15 and 15.1",
        "title": "Requests, Repairs, and Written Requests Required",
        "leaseLanguage": "Requests, Repairs and Malfunctions.",
        "meaning": "Paragraph 15.1 requires requests — for repairs, installations, services, ownership disclosure or security matters — to be in writing and delivered to the designated representative. The exceptions it names are fair-housing accommodation or modification requests, and situations involving imminent danger such as fire, smoke, gas, explosion or a crime in progress.",
        "definitionTitle": "Maintenance and repairs",
        "definition": "The maintenance and repair responsibilities of both the landlord and the resident, including the process for reporting repair requests.",
        "whyItMatters": "Putting a request in writing is what creates the record the rest of this paragraph depends on.",
        "source": "WIL: Maintenance and Repairs | Lease Paragraphs 15 and 15.1",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 3.07,
            "width": 43.35,
            "height": 18.46
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "requirement-to-notify",
        "paragraphRef": "Paragraph 15.2",
        "title": "Your Requirement to Notify",
        "leaseLanguage": "Your Requirement to Notify. You must promptly notify us in writing of air conditioning or heating problems, water leaks or moisture, mold, electrical problems, malfunctioning lights, broken or missing locks or latches, or any other condition that poses a hazard or threat to property, health, or …",
        "meaning": "Paragraph 15.2 requires you to notify the community promptly in writing of air conditioning or heating problems, water leaks or moisture, mould, electrical problems, malfunctioning lights, broken or missing locks or latches, or any other condition that is a hazard to property, health or safety. It also requires you to keep the apartment cooled or heated as the Lease states.",
        "definitionTitle": "Maintenance and repairs",
        "definition": "The maintenance and repair responsibilities of both the landlord and the resident, including the process for reporting repair requests.",
        "whyItMatters": "This is an obligation on the resident, separate from the right to request a repair.",
        "source": "Lease Paragraph 15.2 — adjacent to WIL: Maintenance and Repairs",
        "needsContent": true,
        "flagNote": "WIL: Maintenance and Repairs describes the repair-request process, not this affirmative duty to report. Needs copy.",
        "rects": [
          {
            "x": 5.53,
            "y": 21.82,
            "width": 43.35,
            "height": 8.1
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "utilities-work",
        "paragraphRef": "Paragraph 15.3",
        "title": "Utilities — Changes and Interruptions",
        "leaseLanguage": "Utilities. We may change or install utility lines or equipment serving the apartment if the work is done reasonably without substantially increasing your utility costs. …",
        "meaning": "Paragraph 15.3 allows the community to change or install utility lines or equipment serving the apartment if the work is done reasonably and without substantially increasing your utility costs, and to turn equipment off or interrupt utilities to carry out work or avoid damage or emergencies. If utilities malfunction or are damaged you must notify a representative immediately.",
        "source": "Lease Paragraph 15.3",
        "needsContent": true,
        "flagNote": "No WIL entry covers utility interruption. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 30.21,
            "width": 43.35,
            "height": 8.1
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "your-remedies",
        "paragraphRef": "Paragraph 15.4",
        "title": "Your Remedies",
        "leaseLanguage": "Your Remedies. We’ll act with customary diligence to make repairs and reconnections within a reasonable time, taking into consideration when casualty-insurance proceeds are received. …",
        "meaning": "Paragraph 15.4 sets out what the community undertakes to do about repairs and what remedies are available to you. It cites specific sections of the Texas Property Code by number.",
        "whyItMatters": "This paragraph names resident remedies under Texas law. The statutory references should be read in full in the Lease itself.",
        "importantToKnow": "This is one of the few provisions in the document that sets out rights running in the resident's favour. The statute numbers are quoted from the Lease and are not paraphrased here.",
        "source": "Lease Paragraph 15.4 — cites Texas Property Code §92.056, §92.0561 and §92.0563",
        "needsContent": true,
        "contentFlag": "priority",
        "flagNote": "PRIORITY. No WIL entry. The statutory remedies must be described by someone qualified to do so — do not paraphrase what the cited sections grant.",
        "rects": [
          {
            "x": 5.53,
            "y": 38.59,
            "width": 43.35,
            "height": 20.0
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "right-to-terminate",
        "paragraphRef": "Paragraphs 16 and 16.1",
        "title": "Our Right to Terminate, and Property Closure",
        "leaseLanguage": "Our Right to Terminate for Apartment Community Damage or Closure. If, in our sole judgment, damages to the unit or building are significant or performance of needed repairs poses a danger to you, we may terminate this Lease and your right to possession by giving you …",
        "meaning": "Paragraph 16 allows the community to end the Lease and your right to possession on at least 7 days' written notice if, in its sole judgment, damage to the unit or building is significant or carrying out repairs would put you in danger; it states that prorated rent and all deposits, less lawful deductions, would be refunded. Paragraph 16.1 allows termination on at least 30 days' written notice for demolition, closure for at least 6 months, or eminent domain.",
        "source": "Lease Paragraphs 16 and 16.1",
        "needsContent": true,
        "flagNote": "No WIL entry. Two different notice periods — 7 days and 30 days — confirm the framing before publication.",
        "rects": [
          {
            "x": 5.53,
            "y": 58.88,
            "width": 43.35,
            "height": 16.48
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "assignments-subletting",
        "paragraphRef": "Paragraph 17",
        "title": "Assignments and Subletting",
        "leaseLanguage": "Assignments and Subletting. You may not assign this Lease or sublet your apartment. You agree that you won‘t rent, offer to rent or license all or any part of your apartment to anyone else unless otherwise agreed to in advance by us in writing. …",
        "meaning": "Paragraph 17 states you may not assign this Lease or sublet your apartment. It also states you will not rent, offer to rent, or license all or any part of the apartment to anyone else unless agreed in advance in writing, and will not accept anything of value from anyone else for the use of any part of the apartment.",
        "whyItMatters": "Short-term rental listings are addressed directly by this paragraph.",
        "source": "Lease Paragraph 17",
        "needsContent": true,
        "contentFlag": "conflict",
        "flagNote": "The WIL glossary entries for Lease Assignment and Sublease Agreement are deliberately NOT attached here. Both describe a transfer route that this paragraph prohibits; attaching them would tell a resident an option exists that the Lease forbids. This paragraph needs its own Texas copy.",
        "rects": [
          {
            "x": 5.53,
            "y": 75.64,
            "width": 43.35,
            "height": 8.1
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "security-safety-devices",
        "paragraphRef": "Paragraphs 18, 18.1 and 18.2",
        "title": "Security and Safety Devices, Smoke Alarms, and Duty to Report",
        "leaseLanguage": "Security and Safety Devices. We’ll pay for missing security devices that are required by law. You’ll pay for: (A) rekeying that you request (unless we failed to rekey after the previous resident moved out) …",
        "meaning": "Paragraph 18 says the community pays for missing security devices required by law, and that you pay for rekeying you request and for repairs or replacements caused by misuse or damage. Paragraph 18.1 covers smoke alarms and detection devices, including testing and batteries at move-in and, on request, an alarm capable of alerting a person with a hearing impairment. Paragraph 18.2 requires you to report any missing, malfunctioning or defective device immediately.",
        "source": "Lease Paragraphs 18, 18.1 and 18.2",
        "needsContent": true,
        "flagNote": "No WIL entry. These are Texas statutory security-device provisions — needs copy from someone qualified on the Texas requirements.",
        "rects": [
          {
            "x": 51.12,
            "y": 3.07,
            "width": 43.35,
            "height": 39.2
          },
          {
            "x": 5.53,
            "y": 84.02,
            "width": 43.35,
            "height": 11.69
          }
        ],
        "zoom": 1.4
      },
      {
        "id": "resident-safety-loss",
        "paragraphRef": "Paragraph 19",
        "title": "Resident Safety and Loss",
        "leaseLanguage": "Resident Safety and Loss. Unless otherwise required by law, none of us, our employees, agents, or management companies are liable to you, your guests or occupants for any damage, personal injury, loss to personal property, or loss of business or personal income, from any cause, including …",
        "meaning": "Paragraph 19 states that, unless the law requires otherwise, the owner, its employees, agents and management companies are not liable to you, your guests or your occupants for damage, personal injury, loss of personal property, or loss of business or personal income from the causes it lists.",
        "whyItMatters": "This paragraph is the reason Paragraph 6 requires you to carry your own liability insurance and notes that the community's policy does not cover your belongings.",
        "source": "Lease Paragraph 19",
        "needsContent": true,
        "flagNote": "No WIL entry. Restatement only — a liability-limitation clause should not be summarised further without approved copy.",
        "rects": [
          {
            "x": 51.12,
            "y": 42.56,
            "width": 43.35,
            "height": 23.87
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "condition-alterations",
        "paragraphRef": "Paragraphs 20, 20.1 and 20.2",
        "title": "Condition of the Premises and Alterations",
        "leaseLanguage": "Condition of the Premises and Alterations.",
        "meaning": "Paragraph 20.1 states you accept the apartment, fixtures and furniture as is, except for conditions materially affecting the health or safety of ordinary persons, and that you will be given an Inventory and Condition Form at or before move-in. Paragraph 20.2 states you must not repair, paint, wallpaper, carpet, make electrical changes or otherwise alter the property without written authorisation, and addresses nail holes and stickers.",
        "definitionTitle": "Home alterations",
        "definition": "What alterations are allowed and which are prohibited, as well as the Inventory and Condition form the resident is given at move-in.",
        "definition2Title": "Inventory and Condition form",
        "definition2": "A form provided at move-in on which the resident notes all defects or damage before returning it to the owner's representative.",
        "whyItMatters": "The Inventory and Condition Form is how existing damage is recorded before it can be attributed to you at move-out.",
        "source": "WIL: Home Alterations | Lease Paragraphs 20, 20.1 and 20.2",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 66.71,
            "width": 43.35,
            "height": 29.0
          }
        ],
        "zoom": 1.9
      }
    ]
  },
  {
    "page": 5,
    "category": "Notices & Default",
    "pageTitle": "Notices, Liability, and Default",
    "image": "assets/tx/lease-page-05-sanitized.webp",
    "pageTextUrl": "assets/tx/text/lease-page-05.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "notices",
        "paragraphRef": "Paragraph 21",
        "title": "Notices",
        "leaseLanguage": "Notices. Written notice to or from our employees, agents, or management company constitutes notice to or from us. Notices to you or any other Resident constitute notice to all Residents. Notices and requests from any Resident constitute notice from all Residents. …",
        "meaning": "Paragraph 21 states that written notice to or from employees, agents or the management company counts as notice to or from the owner; that notice to any one Resident is notice to all Residents; and that a request from any one Resident is a request from all Residents.",
        "definitionTitle": "Notice to vacate",
        "definition": "A formal notice given to the landlord by a resident stating they intend to end occupancy of the premises and not renew the lease.",
        "definition2Title": "Termination",
        "definition2": "Any situation in which either party to the rental agreement — resident or landlord — decides to end the agreement. Eviction, non-renewal and vacating for cause are all types of termination.",
        "whyItMatters": "Notice given to one person on the Lease reaches everyone on the Lease, whether or not they saw it.",
        "source": "WIL: Termination (notice requirements) | Lease Paragraph 21",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 16.66,
            "width": 43.35,
            "height": 7.11
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "electronic-notice",
        "paragraphRef": "Paragraphs 21.1 and 21.2",
        "title": "Electronic Notice and Resident Email",
        "leaseLanguage": "Electronic Notice. If allowed by law and in accordance with this Lease, we may give you notice electronically, by email, by phone, or by delivery to your physical address. …",
        "meaning": "Paragraph 21.1 allows notice to be given electronically, by email, by phone or by delivery to your physical address where the law allows, and states that such notices may include a Notice to Pay Rent or Vacate or a Notice to Vacate. Paragraph 21.2 states the email address you gave during the application process, or any other address you have used to communicate with the community, may be used for those notices.",
        "whyItMatters": "The address you used when applying can be the address a formal notice arrives at.",
        "source": "Lease Paragraphs 21.1 and 21.2",
        "needsContent": true,
        "flagNote": "No WIL entry. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 24.05,
            "width": 43.35,
            "height": 25.31
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "liability",
        "paragraphRef": "Paragraph 22",
        "title": "Liability — Joint and Several",
        "leaseLanguage": "Liability. Each resident is jointly and severally liable for all Lease obligations. If you or any guest or occupant violates this Lease or our Community Policies, all residents are considered to have violated this Lease.",
        "meaning": "Paragraph 22 states each resident is jointly and severally liable for all Lease obligations, and that if you or any guest or occupant violates the Lease or the Community Policies, all residents are considered to have violated it.",
        "definitionTitle": "Responsibilities of the parties",
        "definition": "The obligations that belong to the owner and the obligations that belong to the resident. Any violation by a guest falls under the responsibility of the resident.",
        "whyItMatters": "“Jointly and severally” means each resident can be held responsible for the whole obligation, not only a share of it.",
        "example": "If Riley Morgan and Sam Delgado both sign, either one can be pursued for the full amount owed.",
        "source": "WIL: Responsibilities of the Parties | Lease Paragraph 22",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 49.64,
            "width": 43.35,
            "height": 4.13
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "indemnification",
        "paragraphRef": "Paragraph 22.1",
        "title": "Indemnification by You",
        "leaseLanguage": "Indemnification by You. You’ll defend, indemnify and hold us and our employees, agents, and management company harmless from all liability arising from your conduct or requests to our representatives and from the conduct of or requests by your invitees, occupants or guests.",
        "meaning": "Paragraph 22.1 requires you to defend, indemnify and hold the owner, its employees, agents and management company harmless from liability arising from your conduct or requests, and from the conduct or requests of your invitees, occupants or guests.",
        "source": "Lease Paragraph 22.1",
        "needsContent": true,
        "flagNote": "No WIL entry. Restatement only.",
        "rects": [
          {
            "x": 5.53,
            "y": 54.06,
            "width": 43.35,
            "height": 5.12
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "default",
        "paragraphRef": "Paragraphs 23 and 23.1",
        "title": "Default and Acts of Default",
        "leaseLanguage": "Default by Resident.",
        "meaning": "Paragraph 23.1 lists what puts you in default, including not paying Rent or other amounts on time, violating the Lease, Community Policies or the law, and giving incorrect, incomplete or false answers in a rental application or in the Lease.",
        "definitionTitle": "Eviction",
        "definition": "The formal process that terminates the lease early. Eviction takes place as a result of certain conditions, which the lease outlines.",
        "whyItMatters": "Default is the gateway to the remedies in Paragraphs 23.2 through 23.6, including acceleration.",
        "source": "WIL: Eviction | Lease Paragraphs 23 and 23.1",
        "needsContent": false,
        "rects": [
          {
            "x": 5.53,
            "y": 59.47,
            "width": 43.35,
            "height": 16.48
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "eviction",
        "paragraphRef": "Paragraph 23.2",
        "title": "Eviction",
        "leaseLanguage": "Eviction. If you default, including holding over, we may end your rights of occupancy and possession by giving you at least a 24-hour written Notice to Vacate or written Notice to Pay Rent or Vacate, either of which may be given by any method allowed under …",
        "meaning": "Paragraph 23.2 states that if you default, including holding over, the community may end your rights of occupancy and possession by giving at least a 24-hour written Notice to Vacate or Notice to Pay Rent or Vacate, by any method the law allows, including email and other electronic means.",
        "definitionTitle": "Eviction",
        "definition": "The formal process that terminates the lease early. Eviction takes place as a result of certain conditions, which the lease outlines.",
        "source": "WIL: Eviction | Lease Paragraph 23.2",
        "needsContent": false,
        "contentFlag": "ambiguous",
        "flagNote": "The supplied WIL entry describes eviction as the formal process that terminates the lease early. This paragraph is the notice step that precedes a court proceeding, not the proceeding itself — the same scope question flagged on the Georgia lease.",
        "rects": [
          {
            "x": 5.53,
            "y": 76.23,
            "width": 43.35,
            "height": 19.48
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "acceleration",
        "paragraphRef": "Paragraph 23.3",
        "title": "Acceleration of Rent",
        "leaseLanguage": "Acceleration. Unless we elect not to accelerate Rent, all monthly Rent for the rest of the Lease term or renewal period will be accelerated automatically without notice or demand (before or after acceleration) and will be immediately due if, without our written consent: (A) you move …",
        "meaning": "Paragraph 23.3 states that, unless the community elects not to accelerate, all monthly Rent for the rest of the Lease term or renewal period becomes due automatically, without notice or demand, in the circumstances the paragraph lists.",
        "whyItMatters": "Acceleration makes the remaining Rent for the whole term immediately due, rather than month by month.",
        "importantToKnow": "Read this paragraph in full in the Lease. It is the provision with the largest financial consequence in the document, and the circumstances that trigger it are set out in the paragraph itself.",
        "source": "Lease Paragraph 23.3",
        "needsContent": true,
        "contentFlag": "priority",
        "flagNote": "PRIORITY. No WIL entry and no Georgia equivalent. This clause needs carefully approved copy — the triggers listed in the Lease must be reproduced accurately and not summarised.",
        "rects": [
          {
            "x": 51.12,
            "y": 2.32,
            "width": 43.35,
            "height": 17.47
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "holdover-remedies",
        "paragraphRef": "Paragraphs 23.4, 23.5 and 23.6",
        "title": "Holdover, Other Remedies, and Electronic Court Appearances",
        "leaseLanguage": "Holdover. You and all occupants must vacate and surrender the apartment by or before the date contained in: (1) your move-out notice (2) our Notice to Pay Rent or Vacate (if you don’t timely pay) or our Notice to Vacate, (3) our notice of nonrenewal, or …",
        "meaning": "Paragraph 23.4 requires you and all occupants to vacate by the date in your move-out notice, the community's notice, a notice of nonrenewal, or a written agreement. Paragraph 23.5 allows unpaid amounts to be reported to credit agencies as the law allows and permits contact by any legal means. Paragraph 23.6 allows court proceedings related to the Lease, including an eviction case, to be conducted electronically where the law permits, without limiting either party's right to request an in-person appearance.",
        "source": "Lease Paragraphs 23.4, 23.5 and 23.6",
        "needsContent": true,
        "flagNote": "No WIL entries. Restatement only.",
        "rects": [
          {
            "x": 51.12,
            "y": 20.08,
            "width": 43.35,
            "height": 35.78
          }
        ],
        "zoom": 1.54
      },
      {
        "id": "authority-moveout-notice",
        "paragraphRef": "Paragraphs 24 and 25",
        "title": "Representatives' Authority and Move-Out Notice",
        "leaseLanguage": "Representatives’ Authority and Waivers. Our representatives (including management personnel, employees, and agents) have no authority to waive, amend, or terminate this Lease or any part of it unless in writing and signed, and no authority to make promises, representations, or agreements that impose security duties or …",
        "meaning": "Paragraph 24 states that representatives have no authority to waive, amend or terminate the Lease, or to make promises that impose obligations on the owner, unless it is in writing and signed. Paragraph 25 requires advance written move-out notice as stated in Paragraph 4, even if the Lease has become month-to-month, and states the move-out date cannot be changed unless both sides agree in writing.",
        "definitionTitle": "Notice to vacate",
        "definition": "A formal notice given to the landlord by a resident stating they intend to end occupancy of the premises and not renew the lease.",
        "whyItMatters": "A verbal assurance from a staff member does not change the Lease, and a verbal move-out date does not count.",
        "example": "This Lease requires 60 days' written notice.",
        "source": "WIL: Notice to vacate | Lease Paragraphs 24 and 25",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 56.14,
            "width": 43.35,
            "height": 39.57
          }
        ],
        "zoom": 1.4
      }
    ]
  },
  {
    "page": 6,
    "category": "Move-Out & General",
    "pageTitle": "Move-Out, General Clauses, and Signatures",
    "image": "assets/tx/lease-page-06-sanitized.webp",
    "pageTextUrl": "assets/tx/text/lease-page-06.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "moveout-cleaning",
        "paragraphRef": "Paragraphs 26 and 26.1",
        "title": "Move-Out Procedures and Cleaning",
        "leaseLanguage": "Move-Out Procedures. 26. 1. Cleaning.",
        "meaning": "Paragraph 26.1 requires you to thoroughly clean the apartment — including doors, windows, furniture, bathrooms, kitchen appliances, patios, balconies, garages, carports and storage rooms — and to follow any move-out cleaning instructions provided. If the apartment is not cleaned adequately you are liable for reasonable cleaning charges.",
        "definitionTitle": "Move-out procedures",
        "definition": "The formal procedures followed by the community and the resident to move a resident out of their apartment home.",
        "definition2Title": "Cleaning",
        "definition2": "The required cleaning of the unit that a resident must do when moving out.",
        "whyItMatters": "Cleaning charges are one of the deductions that can reduce the deposit refund under Paragraph 5.1.",
        "source": "WIL: Move-Out Procedures, Cleaning | Lease Paragraphs 26 and 26.1",
        "needsContent": false,
        "mergeNote": "Paragraph 26 is a heading line only — Paragraph 26.1 begins on the line beneath it — so the two are presented together rather than as two separate hotspots.",
        "rects": [
          {
            "x": 5.53,
            "y": 9.99,
            "width": 43.35,
            "height": 10.53
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "moveout-inspection",
        "paragraphRef": "Paragraph 26.2",
        "title": "Move-Out Inspection",
        "leaseLanguage": "Move-Out Inspection. We may, but are not obligated to, provide a joint move-out inspection. Our representatives have no authority to bind or limit us regarding deductions for repairs, damages, or charges. …",
        "meaning": "Paragraph 26.2 states the community may, but is not obliged to, provide a joint move-out inspection, and that representatives have no authority to bind or limit it on deductions for repairs, damages or charges. Any statement or estimate given to you is subject to correction, modification or disapproval before the final accounting or refund.",
        "definitionTitle": "Move-out inspection",
        "definition": "An inspection conducted after a resident moves out, at which damage or alterations to the unit are confirmed. The resident is then sent a Final Account Statement listing all charges, including final utility and rent charges.",
        "definition2Title": "FAS (Final Account Statement)",
        "definition2": "The statement sent after the move-out inspection listing all charges, including final utility and rent charges.",
        "whyItMatters": "A figure quoted at the inspection is not final until the written accounting is issued.",
        "importantToKnow": "The TAA form calls the closing document an “itemized list of charges” or “itemized accounting.” At Cortland this is the Final Account Statement, or FAS.",
        "source": "WIL: Move-out Inspection, FAS | Lease Paragraph 26.2",
        "needsContent": false,
        "contentFlag": "ambiguous",
        "flagNote": "The supplied WIL material says the inspection takes place three days after move-out and is conducted by a Service Manager. This Lease says a joint inspection is optional and sets no timing. Same wording conflict flagged on the Georgia lease — confirm which description residents should be given.",
        "rects": [
          {
            "x": 5.53,
            "y": 20.8,
            "width": 43.35,
            "height": 6.11
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "surrender-abandonment",
        "paragraphRef": "Paragraphs 27 and 27.1",
        "title": "Surrender, Abandonment, and the Ending of Your Rights",
        "leaseLanguage": "Surrender and Abandonment. You have surrendered the apartment when: (A) the move-out date on your notice to us, the non-renewal sent to you, or the Notice to Pay Rent or Vacate or Notice to Vacate date has passed and no one is living in the apartment …",
        "meaning": "Paragraph 27 states you have surrendered the apartment when the move-out date on your notice or the community's notice has passed and no one is living there in its reasonable judgment, or when the keys and access devices listed in Paragraph 2.1 have been turned in — whichever happens first. Paragraph 27.1 states that surrender, abandonment or judicial eviction ends your right of possession for all purposes.",
        "source": "Lease Paragraphs 27 and 27.1",
        "needsContent": true,
        "flagNote": "No WIL entry. Restatement only. Note the link back to the access devices listed in Paragraph 2.1.",
        "rects": [
          {
            "x": 5.53,
            "y": 27.2,
            "width": 43.35,
            "height": 20.89
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "removal-storage",
        "paragraphRef": "Paragraph 27.2",
        "title": "Removal and Storage of Property",
        "leaseLanguage": "Removal and Storage of Property. We, or law officers, may— but have no duty to—remove or store all property that in our sole judgment belongs to you and remains in the apartment or in common areas (including any vehicles you or any occupant or guest owns …",
        "meaning": "Paragraph 27.2 states the community or law officers may — but have no duty to — remove or store property that in its sole judgment belongs to you and remains in the apartment or in common areas, including vehicles, after a judicial eviction or after you surrender or abandon the apartment, and that it is not liable for casualty, loss, damage or theft.",
        "definitionTitle": "Lien",
        "definition": "The right of a landlord to keep possession of a renter's property until a debt has been paid.",
        "source": "WIL: Lien | Lease Paragraph 27.2",
        "needsContent": true,
        "contentFlag": "ambiguous",
        "flagNote": "The WIL Lien entry describes a landlord's right to keep a resident's property until a debt is paid. This paragraph is about removal and storage after surrender, abandonment or eviction. Verify whether this Lease creates a lien before the Lien definition is attached to it.",
        "rects": [
          {
            "x": 5.53,
            "y": 48.38,
            "width": 43.35,
            "height": 21.69
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "taa-membership",
        "paragraphRef": "Paragraph 28",
        "title": "TAA Membership",
        "leaseLanguage": "TAA Membership. We, the management company representing us, or any locator service that you used confirms membership in good standing of both the Texas Apartment Association and the affiliated local apartment association for the area where the apartment is located at the time of signing this …",
        "meaning": "Paragraph 28 states that the owner, the management company, or any locator service you used confirms membership in good standing of the Texas Apartment Association and the affiliated local association at the time the Lease is signed, and sets out what applies if that is not the case.",
        "importantToKnow": "Read this paragraph in full in the Lease. It states a consequence that turns on whether the membership condition is met.",
        "source": "Lease Paragraph 28",
        "needsContent": true,
        "contentFlag": "priority",
        "flagNote": "PRIORITY. No WIL entry and no Georgia equivalent. The consequence this paragraph sets out should be described by someone qualified to do so.",
        "rects": [
          {
            "x": 5.53,
            "y": 70.36,
            "width": 43.35,
            "height": 23.88
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "general-clauses",
        "paragraphRef": "Paragraphs 29 and 30",
        "title": "Severability, Survivability, and Controlling Law",
        "leaseLanguage": "Severability and Survivability. If any provision of this Lease is invalid or unenforceable under applicable law, it won’t invalidate the remainder of this Lease or change the intent of the parties. …",
        "meaning": "Paragraph 29 states that if a provision is invalid or unenforceable the rest of the Lease still stands, lists the paragraphs that survive termination, and states the Lease binds subsequent owners. Paragraph 30 states that Texas law governs the Lease and that litigation must be brought in the county — and precinct if applicable — where the apartment is located.",
        "definitionTitle": "General terms and clauses",
        "definition": "The section of the lease that gives a general understanding of clauses that have a direct effect on how the lease is used.",
        "whyItMatters": "Several obligations continue after the Lease ends; Paragraph 29 names which ones.",
        "source": "WIL: General Terms and Clauses | Lease Paragraphs 29 and 30",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 3.14,
            "width": 43.35,
            "height": 8.54
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "waivers",
        "paragraphRef": "Paragraphs 31, 31.1 and 31.2",
        "title": "Waivers, Class Action Waiver, and Force Majeure",
        "leaseLanguage": "Waivers. By signing this Lease, you agree to the following:",
        "meaning": "Paragraph 31.1 states you will not take part in any class action claim against the owner, its employees, agents or management company, that any claim must be filed individually, and that you waive the right to bring, represent, join or maintain a class or collective action in any forum. Paragraph 31.2 excuses the community from further performance, to the fullest extent the law allows, where performance is prevented by occurrences beyond its control.",
        "whyItMatters": "A class action waiver changes how a dispute can be brought, not whether a claim exists.",
        "source": "Lease Paragraphs 31, 31.1 and 31.2",
        "needsContent": true,
        "contentFlag": "priority",
        "flagNote": "PRIORITY. No WIL entry. A class action waiver needs copy approved by someone qualified; it should not be characterised beyond what the paragraph says.",
        "rects": [
          {
            "x": 51.12,
            "y": 11.97,
            "width": 43.35,
            "height": 23.33
          }
        ],
        "zoom": 2.0
      },
      {
        "id": "special-provisions",
        "paragraphRef": "Paragraph 32",
        "title": "Special Provisions and Signatures",
        "leaseLanguage": "Special Provisions. The following, or attached Special Provisions and any addenda or Community Policies provided to you, are part of this Lease and supersede any conflicting provisions in this Lease. __________________________________________________________ 1) Each monthly utility statement will __________________________________________________________ include rent, trash, ancillary, and __________________________________________________________ stormwater/drainage billing …",
        "meaning": "Paragraph 32 states that the Special Provisions written here, and any attached addenda or Community Policies, are part of the Lease and supersede any conflicting provisions elsewhere in it. The typed provisions on this Lease cover the monthly utility statement, what billed trash expense may include, and partial rent payments.",
        "definitionTitle": "Special Provisions",
        "definition": "Specific conditions or requirements peculiar to the lease, supplemental to the General Provisions. Should the Special Provisions conflict with the General Provisions, the Special Provisions prevail.",
        "definition2Title": "Signatures",
        "definition2": "The landlord and resident(s) must sign the lease to acknowledge they have read, understood, and agreed to its terms.",
        "whyItMatters": "Special Provisions override the printed text, so this short typed block can change how earlier paragraphs apply.",
        "example": "One of the typed provisions on this Lease reads: “Landlord reserves the right to reject any partial rent payment.”",
        "crossRef": [
          {
            "lease": "ga",
            "page": 2,
            "hotspot": "special-provisions",
            "label": "The Georgia lease carries the same typed provision at Paragraph 10"
          }
        ],
        "source": "WIL: Special Provisions, Signatures | Lease Paragraph 32 and signature block",
        "needsContent": false,
        "rects": [
          {
            "x": 51.12,
            "y": 35.58,
            "width": 43.35,
            "height": 60.13
          }
        ],
        "zoom": 1.4
      }
    ]
  }
];

