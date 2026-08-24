/*  lease-data.js — content model for the Interactive Residential Lease Explainer
 *
 *  All content lives here; js/app.js contains no lease copy. To add a page or a term,
 *  edit this file only.
 *
 *  Geometry: hotspot rectangles are percentages of the ORIGINAL page image
 *  (1700 x 2800 px), never screen pixels, so they track the image as it scales.
 *  A hotspot may carry more than one rect: many provisions in this two-column form
 *  run from the foot of one column to the head of the next. Every rect is highlighted;
 *  the largest one is what the viewer zooms and pans to.
 *
 *  Privacy: every value below that names a person, a property, a company, an address,
 *  a phone number, a licence number, a bank, a date or a dollar amount is FICTIONAL and
 *  is drawn from FICTION. The same fictional values are baked into the page images
 *  themselves — nothing is masked in the browser.
 */

export const FICTION = {
  "residentName": "Jordan Parker",
  "coResidentName": "Alex Rivera",
  "occupantName": "Maya Parker",
  "ownerEntity": "Oakridge Residential Partners, LLC",
  "propertyName": "Oakridge Apartments",
  "propertyAddress": "4120 Willow Bend Parkway",
  "propertyCity": "Marietta",
  "propertyZip": "30060",
  "unitNumber": "214",
  "managementCompany": "Meridian Residential Management LLC",
  "managementAddress": "2400 Sterling Park Drive, Suite 450, Atlanta, GA 30328",
  "managementPhone": "(770) 555-0134",
  "grecLicense": "000000",
  "depositBank": "Peachtree State Bank & Trust",
  "depositBankAddress": "500 Sterling Park Drive, Atlanta, GA 30328",
  "leaseDate": "July 15, 2026",
  "leaseStart": "September 10, 2026",
  "leaseEnd": "September 30, 2027",
  "monthlyRent": "$1,675.00",
  "proratedRent": "$1,172.50",
  "securityDeposit": "$500.00",
  "relettingCharge": "$1,675.00"
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
    "title": "Common types of lease agreements",
    "note": "Lease agreements vary in format, language and requirements depending on the property type, the location, and applicable law. These four types come from the source material and describe leases generally — they are not provisions of the document shown in this guide.",
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
        "Sublease",
        "Lets a tenant rent all or part of the leased property to a subtenant. While the subtenant occupies the property, the original tenant remains responsible for all obligations to the landlord."
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
        "Begins September 10, 2026 and ends at 11:59 p.m. on September 30, 2027 (Paragraph 3)."
      ],
      [
        "Automatic renewal",
        "Renews month-to-month unless either party gives at least 60 days written notice. If the notice-days blank is not filled in, Paragraph 3 requires at least 30 days."
      ],
      [
        "Rent due date",
        "The 1st of each month, with no grace period (Paragraph 6)."
      ],
      [
        "Late charge trigger",
        "Rent unpaid after the 3rd day of the month draws a late charge (Paragraph 6)."
      ],
      [
        "First month prorated",
        "$1,172.50 for September 10–30, 2026, due September 10, 2026 (Paragraph 6)."
      ]
    ]
  },
  {
    "id": "money",
    "title": "Know Your Financial Responsibilities",
    "items": [
      [
        "Monthly rent",
        "$1,675.00, payable in advance and without demand (Paragraph 6)."
      ],
      [
        "Security deposit",
        "$500.00, due on or before signing, held at Peachtree State Bank & Trust (Paragraph 4). If interest is earned on the deposit, Paragraph 4 states the owner may keep it."
      ],
      [
        "Late charge",
        "10% of total monthly rent; Paragraph 6 states late charges shall not exceed ten percent of the monthly rent payment."
      ],
      [
        "Returned payment",
        "$50.00 per returned check or rejected electronic payment, plus a late charge (Paragraph 6)."
      ],
      [
        "Reletting charge",
        "$1,675.00, capped by 11 at 100% of the highest monthly rent during the term. Paragraph 11 states it is not a cancellation or buyout fee and does not release you from the lease."
      ],
      [
        "Utilities",
        "No owner-paid utility boxes are checked on page 1, so Paragraph 7 leaves all listed utilities, related deposits and charges to the resident."
      ],
      [
        "All payments are rent",
        "Paragraph 6 states all payment obligations under the lease constitute rent."
      ]
    ]
  },
  {
    "id": "notice",
    "title": "Know Your Notice Requirements",
    "items": [
      [
        "Move-out notice",
        "Must be in writing and must state the date you intend to vacate (Paragraph 46), given as far in advance as Paragraph 3 requires — 60 days under this lease."
      ],
      [
        "Where notice goes",
        "Paragraph 37 states written notice to or from managers constitutes notice to or from the owner. Page 9 (Paragraph 54) carries the name and address to use."
      ],
      [
        "Keep a copy",
        "Paragraph 37 states any person giving notice under the lease should retain a copy."
      ],
      [
        "Repair requests",
        "Paragraph 27 requires requests through the online resident/maintenance portal, or signed and in writing to the designated representative, except for the emergencies it lists. Notes taken on an oral request do not count as a written request."
      ],
      [
        "Forwarding address",
        "Paragraph 47 requires giving the owner and the U.S. Postal Service each resident's forwarding address in writing; Paragraph 51 requires written notice of it on or before termination."
      ]
    ]
  },
  {
    "id": "moveout",
    "title": "Know Before You Move Out",
    "items": [
      [
        "Move-out date is fixed",
        "Paragraph 47 states it cannot be changed unless both parties agree in writing."
      ],
      [
        "Deposit cannot be used as rent",
        "Paragraph 47 states the resident is prohibited by law from applying the security deposit to rent."
      ],
      [
        "Everyone must be out",
        "Paragraph 47 states all residents, guests and occupants must vacate before the 30-day deposit refund period begins."
      ],
      [
        "Cleaning",
        "Paragraph 48 lists the areas to be cleaned and states that inadequate cleaning creates liability for reasonable cleaning charges."
      ],
      [
        "Inspection and damage list",
        "Paragraph 49 describes the inspection window, your right to request and inspect the damage list, and the effect of signing or not objecting to it."
      ],
      [
        "Condition form matters",
        "The Inventory and Condition form from 26 is what move-out charges under 50 are measured against."
      ],
      [
        "Deposit return",
        "Paragraph 51 requires written notice of a forwarding address on or before termination; the refund and an itemized accounting are mailed to that address."
      ]
    ]
  }
];

export const LEASE = [
  {
    "page": 1,
    "category": "Basic Lease Information",
    "pageTitle": "Moving In: General Information",
    "image": "assets/lease-page-01-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-01.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "parties",
        "paragraphRef": "1",
        "title": "Parties",
        "leaseLanguage": "This Lease Contract (sometimes referred to as the “lease”) is between you, the resident(s) (list all people signing the Lease Contract) … and us, the owner … If anyone else has guaranteed performance of this Lease Contract, a separate Lease Contract Guaranty for each guarantor is attached.",
        "meaning": "Everyone who signs the lease, and the owner they are signing with. Signers share the responsibilities in the document.",
        "definitionTitle": "Parties",
        "definition": "The Landlord and Tenant(s) entering into the lease agreement.",
        "definition2Title": "Guarantor",
        "definition2": "A third party who is legally responsible for the financial obligations under the lease if the resident fails to pay rent and/or other money owed to the landlord.",
        "whyItMatters": "Each person listed as a resident is bound by the whole agreement, not just their share.",
        "example": "Jordan Parker and Alex Rivera sign as residents; Oakridge Residential Partners, LLC is the owner.",
        "importantToKnow": "Paragraph 1 notes that if anyone has guaranteed performance of the lease, a separate Lease Contract Guaranty is attached. A guarantor is a third party who is legally responsible for the financial obligations under the lease if the resident fails to pay rent or other money owed.",
        "source": "WIL: Parties, Guarantor | Lease 1",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 13.75,
            "width": 45.06,
            "height": 37.32
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "occupants",
        "paragraphRef": "2",
        "title": "Occupants",
        "leaseLanguage": "The apartment will be occupied only by you and (list all other occupants not signing the Lease Contract) … No one else may occupy the apartment. Persons not listed above must not stay in the apartment for more than 3 consecutive days without our prior written consent, and no more than twice that many days in any one month.",
        "meaning": "Lists everyone who will live in the apartment but is not signing the lease.",
        "definitionTitle": "Occupants",
        "definition": "Anyone who will be living in the apartment, including children.",
        "whyItMatters": "Anyone not listed is a guest, and Paragraph 2 sets a limit on how long guests may stay.",
        "example": "Maya Parker is listed as an occupant. A guest may not stay more than 3 consecutive days without written consent, and no more than twice that many days in any one month.",
        "source": "WIL: Occupants | Lease 2",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 51.11,
            "width": 45.06,
            "height": 22.5
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "lease-term",
        "paragraphRef": "3",
        "title": "Lease Term and Renewal",
        "leaseLanguage": "The initial term of the Lease Contract begins on the 10 day of September, 2026, and ends at 11:59 p.m. the 30 day of September, 2027. Renewal. This Lease Contract will automatically renew month-to-month unless either party gives at least 60 days written notice of termination or intent to move-out as required by paragraph 46 (Move-Out Notice). If the number of days isn’t filled in, at least 30 days notice is required.",
        "meaning": "The start date, the end date, and what happens when the term runs out.",
        "definitionTitle": "Lease term",
        "definition": "The agreed-upon period of time in which the lease is in effect.",
        "definition2Title": "Month-to-month",
        "definition2": "A lease that renews each month until either party gives notice to end it. With proper notice, the terms of the lease — including rent — may be updated as applicable law allows.",
        "whyItMatters": "Under 3 the lease automatically renews month-to-month unless notice is given.",
        "example": "The term runs September 10, 2026 to 11:59 p.m. September 30, 2027, with 60 days written notice required.",
        "importantToKnow": "Paragraph 3 states that if the notice-days blank is not filled in, at least 30 days notice is required.",
        "source": "WIL: Lease term, Month-to-Month | Lease 3",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 73.64,
            "width": 45.06,
            "height": 15.46
          }
        ],
        "zoom": 2.0,
        "contentFlag": null
      },
      {
        "id": "security-deposit",
        "paragraphRef": "4",
        "title": "Security Deposit",
        "leaseLanguage": "Unless modified by addenda, the total security deposit at the time of execution of this Lease Contract for all residents in the apartment is $500.00, due on or before the date this Lease Contract is signed. … Your security deposit will be (check one) placed in an account at (state the bank’s name) … In the event interest is earned on the security deposit, Owner may keep the interest.",
        "meaning": "The amount held during the lease and where it is held.",
        "definitionTitle": "Security deposit",
        "definition": "A deposit held by the landlord for the term of the lease. It can be used by the landlord for any damage to the apartment, or for any unpaid rent or utility bills.",
        "whyItMatters": "Paragraph 4 makes the deposit due on or before signing, and it is the fund that move-out charges are measured against.",
        "example": "$500.00, held at Peachtree State Bank & Trust.",
        "importantToKnow": "Paragraph 4 states that if interest is earned on the deposit, the owner may keep it.",
        "source": "WIL: Security Deposit | Lease 4",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 89.14,
            "width": 45.06,
            "height": 7.29
          },
          {
            "x": 50.71,
            "y": 13.57,
            "width": 44.94,
            "height": 16.75
          }
        ],
        "zoom": 2.0,
        "contentFlag": null
      },
      {
        "id": "keys",
        "paragraphRef": "5",
        "title": "Keys and Access Devices",
        "leaseLanguage": "You will be provided 2 apartment key(s), 2 mailbox key(s), ____ FOB(s), and/or ____ other access device(s) for access to the building and amenities at no additional cost at move-in. If the key, FOB, or other access device is lost or becomes damaged during your tenancy or is not returned or is returned damaged when you move out, you will be responsible for the costs for the replacement and/or repair of the same.",
        "meaning": "Paragraph 5 records the keys, mailbox keys, FOBs and other access devices provided at move-in, and states that the resident is responsible for replacement or repair costs if a device is lost, damaged, or not returned.",
        "source": "Lease 5 — no entry in the supplied educational material. Supply plain-language copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 30.36,
            "width": 44.94,
            "height": 8.5
          }
        ],
        "zoom": 2.2,
        "contentFlag": null
      },
      {
        "id": "rent",
        "paragraphRef": "6",
        "title": "Rent, Late Charges, and Prorated Rent",
        "leaseLanguage": "Unless modified by addenda, you will pay $1,675.00 per month for rent, payable in advance and without demand … Prorated rent of $1,172.50 is due for the remainder of the 1st month, on September 10, 2026. Otherwise, you must pay your rent on or before the 1st day of each month (due date) with no grace period. … If you don’t pay all rent on or before the 3rd day of the month, you’ll pay a late charge … 10% of your total monthly rent payment. … All payment obligations under this Lease Contract shall constitute rent under this Lease Contract.",
        "meaning": "How much rent is, when it is due, how it may be paid, and what happens if it is late.",
        "definitionTitle": "Prorated",
        "definition": "The amount of rent charged when the first or last month of a lease is less than a full month.",
        "whyItMatters": "Paragraph 6 sets the due date as the 1st of each month with no grace period, and states that all payment obligations under the lease constitute rent.",
        "example": "Rent is $1,675.00. Because the term begins September 10, the first month is prorated to $1,172.50 — 21 days at $55.83 a day. Rent unpaid after the 3rd draws a late charge of 10% of monthly rent, which 6 caps at ten percent; a returned payment adds $50.00 plus a late charge.",
        "importantToKnow": "The typed Special Provision on page Paragraph 2 states that the landlord reserves the right to reject any partial rent payment.",
        "crossRef": [
          {
            "page": 2,
            "hotspot": "special-provisions",
            "label": "Special Provisions (Paragraph 10), page 2"
          }
        ],
        "source": "WIL: Rent, Prorated | Lease 6",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 38.89,
            "width": 44.94,
            "height": 51.75
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "utilities",
        "paragraphRef": "7",
        "title": "Utilities",
        "leaseLanguage": "We’ll pay for the following items, if checked: water · gas · electricity · master antenna · wastewater · trash · cable TV · other ____",
        "meaning": "The checkbox list showing which utilities the owner pays. Anything unchecked is the resident’s responsibility.",
        "whyItMatters": "All parties need to be made known who is responsible for utilities.",
        "example": "In this lease no owner-paid boxes are checked, so all of the utilities listed are the resident’s responsibility.",
        "source": "WIL: Utilities and Expenses | Lease 7",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 90.68,
            "width": 44.94,
            "height": 5.75
          }
        ],
        "zoom": 2.0,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 2,
    "category": "Insurance & Special Terms",
    "pageTitle": "Insurance, Locks, and Special Provisions",
    "image": "assets/lease-page-02-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-02.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "utility-restrictions",
        "paragraphRef": "7 (continued)",
        "title": "Utility Restrictions and Natural Gas Marketer Disclosure",
        "leaseLanguage": "You’ll pay for all other utilities, related deposits, and any charges, fees, or services on such utilities. You must not allow utilities other than cable TV not provided by us to be disconnected for any reason — including disconnection for not paying your bills — until the lease term or renewal period ends. … **Important Disclosure Regarding Management’s Right to Select the Natural Gas Marketer (Provider).** Resident (the Tenant) authorizes Management (the Landlord) to act as Resident’s agent for the limited purpose of selecting the Resident’s natural gas marketer …",
        "meaning": "This restricts the landlord from disconnecting utilities before the lease term ends. This also includes a disclosure about managements selecting the Natural Gas provider.",
        "source": "Lease 7 (continued) — supply plain-language copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 2.5,
            "width": 45.06,
            "height": 34.11
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "insurance",
        "paragraphRef": "8",
        "title": "Insurance",
        "leaseLanguage": "We do not maintain insurance to cover your personal property or personal injury. … We urge you to get your own insurance for losses to your personal property or injuries due to theft, fire, water damage, pipe leaks and the like. Additionally, you are (check one) required to purchase personal liability insurance … If required, this policy must list Owner as an additional insured and failure to maintain personal liability insurance throughout your tenancy, including any renewal periods and/or lease extensions, is an incurable breach of this Lease Contract and may result in the termination of tenancy and eviction …",
        "meaning": "Paragraph 8 states that the owner does not insure the resident’s personal property or personal injury, urges renter’s insurance, and contains the personal liability insurance election. In this lease the “required to purchase personal liability insurance” box is checked.",
        "importantToKnow": "Paragraph 8 describes failure to maintain required personal liability insurance as an incurable breach of the lease.",
        "source": "Lease 8 — no insurance entry in the supplied educational material. Supply copy, and confirm whether the incurable-breach language should be surfaced to residents.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 36.64,
            "width": 45.06,
            "height": 17.64
          },
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 22.5
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "locks",
        "paragraphRef": "9",
        "title": "Locks, Latches, and Rekeying",
        "leaseLanguage": "Keyed lock(s) will be rekeyed after the prior resident moves out. The rekeying will be done before you move in to your apartment. You agree to not install additional or different locks or latches on any doors or windows of the premises, unless we have consented in writing to such installation. … **Payment for Rekeying, Repairs, Etc.** You must pay for all repairs or replacements arising from misuse or damage to devices by you or your occupants, or guests during your occupancy.",
        "meaning": "Paragraph 9 covers rekeying before move-in, the prohibition on installing additional locks without written consent, and who pays for later rekey requests and for repairs arising from misuse.",
        "source": "Lease 9 — partially adjacent to WIL: Maintenance and Repairs. Supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 25.04,
            "width": 44.94,
            "height": 29.25
          }
        ],
        "zoom": 2.0,
        "contentFlag": null
      },
      {
        "id": "special-provisions",
        "paragraphRef": "10",
        "title": "Special Provisions",
        "leaseLanguage": "The following special provisions and any addenda or written rules furnished to you at or before signing will become a part of this Lease Contract and will supersede any conflicting provisions of this printed Lease Contract form. Landlord reserves the right to reject any partial rent payment. See any additional special provisions.",
        "meaning": "Terms written specifically for this lease, in addition to the standard printed terms.",
        "definitionTitle": "Special Provisions",
        "definition": "Specific conditions or requirements peculiar to the lease, supplemental to the General Provisions. Should the Special Provisions conflict with the General Provisions, the Special Provisions shall prevail.",
        "whyItMatters": "Paragraph 10 states that these provisions become part of the lease and supersede conflicting provisions of the printed form.",
        "example": "This lease adds one special provision: the landlord reserves the right to reject any partial rent payment.",
        "importantToKnow": "Paragraph 10 directs the reader to any additional special provisions, and the form continues them on page 9.",
        "crossRef": [
          {
            "page": 9,
            "hotspot": "special-provisions-continued",
            "label": "Special Provisions continued, page 9"
          }
        ],
        "source": "WIL: Special Provisions | Lease 10",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 57.43,
            "width": 45.06,
            "height": 12.25
          }
        ],
        "zoom": 2.2,
        "contentFlag": null
      },
      {
        "id": "early-moveout",
        "paragraphRef": "11",
        "title": "Early Move-Out and Reletting Charge",
        "leaseLanguage": "You’ll be liable to us for a reletting charge of $1,675.00 (not to exceed 100% of the highest monthly rent during the Lease Contract term) if you: (Paragraph 1) fail to give written move-out notice as required in paragraphs 24 (Military Transfer and Lease Termination) or 46 (Move-Out Notice); or (Paragraph 2) move out without paying rent in full for the entire Lease Contract term or renewal period; or (Paragraph 3) move out at our demand because of your default; or (Paragraph 4) are judicially evicted. … **Not a Release.** The reletting charge is not a Lease Contract cancellation fee or buyout fee.",
        "meaning": "A charge that applies in the four situations Paragraph 11 lists, including moving out without paying rent for the full term and being judicially evicted.",
        "whyItMatters": "Paragraph 11 states the reletting charge is not a cancellation or buyout fee and does not release the resident from the lease.",
        "example": "The reletting charge is $1,675.00, which 11 caps at 100% of the highest monthly rent during the term.",
        "importantToKnow": "Paragraph 11 states that if no amount is stipulated, the resident must pay the actual reletting costs so far as they can be determined.",
        "source": "Lease 11, adjacent to WIL: Release of Resident",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 69.71,
            "width": 45.06,
            "height": 26.71
          }
        ],
        "zoom": 1.9,
        "contentFlag": null
      },
      {
        "id": "contractual-lien",
        "paragraphRef": "13",
        "title": "Contractual Lien",
        "leaseLanguage": "All property in the apartment is subject to a contractual lien to secure payment of delinquent rent. For this purpose, “apartment” excludes common areas but includes interior living areas and exterior patios, balconies, attached garages, and storerooms for your exclusive use.",
        "meaning": "Property in the apartment is subject to a lien securing payment of delinquent rent.",
        "definitionTitle": "Lien",
        "definition": "The right of a landlord to keep possession of a renter’s property until a debt has been paid.",
        "whyItMatters": "Paragraph 13 defines which spaces count for this purpose — it excludes common areas but includes interior living areas, patios, balconies, attached garages, and exclusive-use storerooms.",
        "source": "WIL: Lien | Lease 13",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 81.04,
            "width": 44.94,
            "height": 15.39
          }
        ],
        "zoom": 1.9,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 3,
    "category": "While You're Living in the Apartment",
    "pageTitle": "Rent Changes, Occupancy, and Community Rules",
    "image": "assets/lease-page-03-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-03.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "property-left-behind",
        "paragraphRef": "13 (continued)",
        "title": "Property Left Behind — Storage, Redemption, Disposition",
        "leaseLanguage": "**Storage.** We may store, but have no duty to store, property removed after judicial eviction, surrender, or abandonment of the apartment. … **Redemption.** If we’ve removed and stored property after surrender, abandonment, or judicial eviction, you may redeem only by paying all sums you owe, including rent, late charges, reletting charges, storage, damages, etc. … **Disposition or Sale.** … Property not thrown away or given to charity may be disposed of only by sale, which must be held no sooner than 30 days after written notice of date, time, and place of sale is sent by both regular mail and certified mail (return receipt requested) to your last known address.",
        "meaning": "Paragraph 13 continued covers storage of property after eviction, surrender or abandonment; how stored property may be redeemed; and the notice requirements before any sale.",
        "source": "Lease 13 (continued) — extends WIL: Lien. Supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 2.5,
            "width": 45.06,
            "height": 37.82
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "first-month-rent",
        "paragraphRef": "14",
        "title": "Failing to Pay First Month's Rent",
        "leaseLanguage": "If you don’t pay the first month’s rent when or before the Lease Contract begins, we may end your right of occupancy and recover damages, future rent, reletting charges, attorney’s fees, court costs, and other lawful charges. Our mitigation duties under paragraph 33 (Default by Resident) still apply.",
        "meaning": "Paragraph 14 addresses what may happen if the first month’s rent is not paid when or before the lease begins.",
        "source": "Lease 14 — supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 40.36,
            "width": 45.06,
            "height": 7.36
          }
        ],
        "zoom": 2.2,
        "contentFlag": null
      },
      {
        "id": "rent-increases",
        "paragraphRef": "15",
        "title": "Rent Increases and Lease Changes",
        "leaseLanguage": "No rent increases or Lease Contract changes are allowed before the initial Lease Contract term ends, except for changes allowed by any special provisions in paragraph 10 (Special Provisions), by a written addendum or amendment signed by you and us, or by reasonable changes of apartment rules allowed under paragraph 19 (Community Policies or Rules). If, at least 5 days before the advance notice deadline referred to in paragraph 3 (Lease Term), we give you written notice of rent increases or Lease Contract changes effective when the Lease Contract term or renewal period ends, this Lease Contract will automatically continue month-to-month with the increased rent or Lease Contract changes.",
        "meaning": "Rent and terms generally cannot change before the initial term ends, except through the routes Paragraph 15 lists.",
        "whyItMatters": "Paragraph 15 describes how a month-to-month continuation can carry increased rent if proper written notice is given. This connects to the renewal language in 3.",
        "importantToKnow": "Paragraph 15 states the modified lease can begin without the resident’s signature unless written move-out notice is given under 46.",
        "source": "WIL: Month-to-Month | Lease 15",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 47.75,
            "width": 45.06,
            "height": 17.18
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "delay-occupancy",
        "paragraphRef": "16",
        "title": "Delay of Occupancy",
        "leaseLanguage": "If occupancy is or will be delayed for construction, repairs, cleaning, or a previous resident’s holding over, we’re not responsible for the delay. The Lease Contract will remain in force subject to: (Paragraph 1) abatement of rent on a daily basis during delay; and (Paragraph 2) your right to terminate as set forth below. Termination notice must be in writing. After termination, you are entitled only to refund of deposit(s) and any rent paid.",
        "meaning": "Paragraph 16 covers what happens if move-in is delayed, including rent abatement during the delay and specific windows in which the resident may terminate depending on when notice is given.",
        "source": "Lease 16 — supply copy. Note the two different termination windows (3 days and 7 days) need careful plain-language handling.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 33.46
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "additional-rent",
        "paragraphRef": "17",
        "title": "Additional Rent — Taxes, Fees, and Charges",
        "leaseLanguage": "Unless otherwise prohibited by law, if, during the term of this Agreement, any locality, city, state, or Federal Government imposes upon Us, any fee, charge, or tax, which is related to or charged by the number of occupants, or by the apartment itself, such that we are charged a fee, charge, or tax, based upon your use or occupancy of the apartment, we may add this charge as Additional Rent, during the term of the Lease Contract, with thirty (Paragraph 30) days advance written notice to you.",
        "meaning": "Paragraph 17 describes government-imposed fees, charges or taxes tied to occupancy that may be added as Additional Rent with 30 days advance written notice.",
        "source": "Lease 17 — supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 36.0,
            "width": 44.94,
            "height": 20.5
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "community-policies",
        "paragraphRef": "19, 20",
        "title": "Community Policies and Limitations on Conduct",
        "leaseLanguage": "You and all guests and occupants must comply with any written apartment rules and community policies, including instructions for care of our property. Our rules are considered part of this Lease Contract. We may make reasonable changes to written rules, effective immediately, if they are distributed and applicable to all units in the apartment community and do not change dollar amounts on page 1 of this Lease Contract. … Conducting any kind of business (including child care services) in your apartment or in the apartment community is prohibited — except that any lawful business conducted “at home” by computer, mail, or telephone is permissible if customers, clients, patients, or other business associates do not come to your apartment for business purposes.",
        "meaning": "Written community rules are part of the lease, and Paragraph 20 sets expectations for cleanliness, passageways, amenity use and permitted activity.",
        "definitionTitle": "Common area",
        "definition": "Areas of the apartment community — such as the gym, laundry rooms, clubhouse and outdoor spaces — that are for common use.",
        "whyItMatters": "Paragraph 20 addresses permitted use of the apartment, including the limits on conducting business from the premises. Paragraph 19 states rules may be reasonably changed but cannot change the dollar amounts on page 1.",
        "source": "WIL: Common Area, Use of Property | Lease 19, 20",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 67.93,
            "width": 45.06,
            "height": 28.5
          },
          {
            "x": 50.71,
            "y": 67.32,
            "width": 44.94,
            "height": 29.11
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 4,
    "category": "Resident Responsibilities",
    "pageTitle": "Conduct, Parking, and Ending the Lease Early",
    "image": "assets/lease-page-04-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-04.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "prohibited-conduct",
        "paragraphRef": "21",
        "title": "Prohibited Conduct",
        "leaseLanguage": "You and your occupants or guests may not engage in the following activities: behaving in a loud or obnoxious manner; disturbing or threatening the rights, comfort, health, safety, or convenience of others (including our agents and employees) in or near the apartment community; disrupting our business operations; … engaging in or threatening violence; possessing a weapon prohibited by state law; … tampering with utilities or telecommunications; bringing hazardous materials into the apartment community; or injuring our reputation by making bad faith allegations against us to others.",
        "meaning": "Paragraph 21 lists activities that residents, occupants and guests may not engage in.",
        "whyItMatters": "The supplied material notes that this applies to the resident’s own apartment home as well as shared spaces.",
        "source": "WIL: Prohibited Conduct | Lease 21",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 2.5,
            "width": 45.06,
            "height": 17.29
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "parking",
        "paragraphRef": "22",
        "title": "Parking",
        "leaseLanguage": "We may regulate the time, manner, and place of parking cars, trucks, motorcycles, bicycles, boats, trailers, and recreational vehicles by anyone, including the number of vehicles allowed and location for parking. We may remove unauthorized or illegally parked vehicles from the apartment community at your expense under the terms of this Lease Contract or by appropriate statute. A vehicle is unauthorized or illegally parked in the apartment community if it: …",
        "meaning": "The parking provisions, rules and regulations, including the thirteen conditions under which a vehicle is unauthorized or illegally parked.",
        "whyItMatters": "Paragraph 22 states that unauthorized vehicles may be removed at the resident’s expense.",
        "source": "WIL: Parking | Lease 22",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 19.82,
            "width": 45.06,
            "height": 29.68
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "release-of-resident",
        "paragraphRef": "23",
        "title": "Release of Resident",
        "leaseLanguage": "Unless you’re entitled to terminate your tenancy as pertains to a Family Violence Order under this paragraph or under paragraphs 10 (Special Provisions), 16 (Delay of Occupancy), 24 (Military Transfer and Lease Termination), 32 (Responsibilities of Owner), or 46 (Move-Out Notice), you won’t be released from this Lease Contract for any reason — including but not limited to voluntary or involuntary school withdrawal or transfer, voluntary or involuntary job transfer, marriage, separation, divorce, reconciliation, loss of co-residents, loss of employment, bad health, or death.",
        "meaning": "The only routes by which a resident may be released from the lease.",
        "definitionTitle": "Release of Resident",
        "definition": "The lease section that outlines the only methods by which the resident may terminate the lease.",
        "whyItMatters": "Paragraph 23 lists specific circumstances that do not release a resident, including job transfer, marriage, separation, divorce, loss of co-residents, loss of employment, bad health, and death.",
        "importantToKnow": "Paragraph 23 sets out a separate route for termination based on a family violence court order, with its own notice requirements.",
        "crossRef": [
          {
            "page": 5,
            "hotspot": "when-we-may-enter",
            "label": "When We May Enter (Paragraph 29), page 5"
          }
        ],
        "source": "WIL: Release of Resident | Lease 23",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 49.54,
            "width": 45.06,
            "height": 40.39
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "military-transfer",
        "paragraphRef": "24",
        "title": "Military Transfer and Lease Termination",
        "leaseLanguage": "A resident (including a resident’s spouse) who is a service member on active duty or is called to active duty in the regular or the reserve component of the U.S. Armed Forces, U.S. Coast Guard or National Guard, shall have the right to end this Apartment Rental Contract early by giving 30 days written notice, paying all rent due through the notice date, and providing a copy of the official military orders or written verification signed by the service member’s commanding officer or by providing base housing orders as provided in O.C.G.A. § 44-7-22, if the service member is: …",
        "meaning": "Paragraph 24 sets out an early-termination right for service members who meet one of six listed conditions, with notice and documentation requirements.",
        "source": "Lease 24 — a specific exception to 23. Supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 89.96,
            "width": 45.06,
            "height": 6.46
          },
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 57.5
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      },
      {
        "id": "resident-safety",
        "paragraphRef": "25",
        "title": "Resident Safety — Smoke and Carbon Monoxide Detectors",
        "leaseLanguage": "You and all occupants and guests must exercise due care for your own and others’ safety and security, especially in the use of smoke detectors and carbon monoxide detectors, keyed deadbolt locks, keyless bolting devices, window latches, and access control devices. … After that, you must test the smoke detectors and the carbon monoxide detectors on a regular basis, and must pay for and replace batteries as needed, unless the law provides otherwise. … Neither you nor others may disable neither the smoke detectors nor the carbon monoxide detectors.",
        "meaning": "Paragraph 25 covers detector testing and battery replacement responsibilities, the prohibition on disabling detectors, and the liability stated for damaging or disabling them.",
        "source": "Lease 25 — adjacent to WIL: Maintenance and Repairs. Supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 60.04,
            "width": 44.94,
            "height": 36.39
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 5,
    "category": "Maintenance & Home Care",
    "pageTitle": "Repairs, Animals, and Entry",
    "image": "assets/lease-page-05-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-05.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "crime-emergency",
        "paragraphRef": "25 (continued)",
        "title": "Crime or Emergency",
        "leaseLanguage": "**Crime or Emergency.** Dial 911 or immediately call local medical emergency, fire, or police personnel in case of accident, fire, smoke, or suspected criminal activity, or other emergency involving imminent harm. You should then contact our representative. We’re not obliged to furnish security personnel, security lighting, security gates or fences, or other forms of security. … If you or any occupant or guest is affected by a crime, you must make a written report to our representative and to the appropriate local law-enforcement agency.",
        "meaning": "Paragraph 25 continued directs residents to call 911 first and then the owner’s representative, addresses the owner’s position on security measures, and describes the resident’s reporting obligation after a crime.",
        "source": "Lease 25 (continued) — supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 16.07,
            "width": 45.06,
            "height": 20.54
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "condition-alterations",
        "paragraphRef": "26",
        "title": "Condition of the Premises and Alterations",
        "leaseLanguage": "You accept the apartment, fixtures, and furniture as is. We disclaim all implied warranties. You’ll be given an Inventory and Condition form on or before move-in. Prior to move-in, you must sign and note on the form all defects or damage and return it to our representative. Otherwise, everything will be considered to be in a clean, safe, and good working condition. … Unless authorized by statute or by us in writing, you must not perform any repairs, painting, wallpapering, carpeting, electrical changes, or otherwise alter our property. No holes or stickers are allowed inside or outside the apartment.",
        "meaning": "What may and may not be altered in the home, and the form used to record the home’s condition at move-in.",
        "definitionTitle": "Inventory and Condition form",
        "definition": "A form provided at move-in on which the resident notes all defects or damage before returning it to the owner’s representative.",
        "whyItMatters": "Paragraph 26 states that otherwise everything is considered to be in clean, safe and good working condition. This connects directly to move-out charges under 50.",
        "crossRef": [
          {
            "page": 8,
            "hotspot": "deposit-deductions",
            "label": "Security Deposit Deductions (Paragraph 50), page 8"
          }
        ],
        "source": "WIL: Home Alterations | Lease 26",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 36.61,
            "width": 45.06,
            "height": 39.5
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "requests-repairs",
        "paragraphRef": "27",
        "title": "Requests, Repairs, and Malfunctions",
        "leaseLanguage": "IF YOU OR ANY OCCUPANT NEEDS TO SEND A NOTICE OR REQUEST — FOR EXAMPLE, FOR REPAIRS, INSTALLATIONS, SERVICES, OR SECURITY-RELATED MATTERS — IT MUST BE SUBMITTED THROUGH EITHER THE ONLINE RESIDENT/MAINTENANCE PORTAL, OR SIGNED AND IN WRITING AND DELIVERED TO OUR DESIGNATED REPRESENTATIVE (except in case of fire, smoke, gas, explosion, overflowing sewage, uncontrollable running water, electrical shorts, or crime in progress). Our written notes on your oral request do not constitute a written request from you. … Air conditioning problems are not emergencies.",
        "meaning": "How to submit a maintenance or service request.",
        "whyItMatters": "Paragraph 27 requires requests through the online resident/maintenance portal, or signed and in writing to the designated representative, except for the emergencies it lists. It also states that notes taken on an oral request do not count as a written request.",
        "importantToKnow": "Paragraph 27 states that air conditioning problems are not treated as emergencies.",
        "source": "WIL: Maintenance and Repairs | Lease 27",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 76.14,
            "width": 45.06,
            "height": 20.29
          },
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 17.71
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "animals",
        "paragraphRef": "28",
        "title": "Animals",
        "leaseLanguage": "Unless otherwise provided under federal, state, or local law, no animals (including mammals, reptiles, birds, fish, rodents, and insects) are allowed, even temporarily, anywhere in the Apartment or Apartment Community unless we’ve so authorized in writing. … Animal deposits, additional rents, fees or other charges will not be required for an assistance animal needed due to disability, including an emotional support or service animal, as authorized under federal, state, or local law.",
        "meaning": "Paragraph 28 states that no animals are allowed anywhere in the apartment or community without written authorization.",
        "whyItMatters": "The supplied material notes that for pets there may be an additional Pet Addendum to reference.",
        "importantToKnow": "Paragraph 28 states that deposits, additional rents, fees or other charges are not required for an assistance animal needed due to disability, including an emotional support or service animal, as authorized under applicable law.",
        "source": "WIL: Animal Restrictions | Lease 28",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 20.25,
            "width": 44.94,
            "height": 46.07
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      },
      {
        "id": "when-we-may-enter",
        "paragraphRef": "29",
        "title": "When We May Enter",
        "leaseLanguage": "If you or any guest or occupant is present, then repairers, servicers, contractors, our representatives or other persons listed in (Paragraph 2) below may peacefully enter the apartment at reasonable times for the purposes listed in (Paragraph 2) below. If nobody is in the apartment, such persons may enter peacefully and at reasonable times by duplicate or master key (or by breaking a window or other means when necessary in emergencies) if: (Paragraph 1) written notice of the entry is left in a conspicuous place in the apartment immediately after the entry; and (Paragraph 2) entry is for: responding to your request; making repairs or replacements; …",
        "meaning": "The landlord’s right to enter the home, the circumstances, and the required communication.",
        "whyItMatters": "Paragraph 29 states that when nobody is present, written notice of the entry must be left in a conspicuous place immediately afterward, and that entry must be for one of the listed purposes.",
        "importantToKnow": "Paragraph 29 is the paragraph referenced as “I3500” in the supplied glossary under Release of Resident, confirmed as point 29 on page 5.",
        "source": "WIL: Entering the Home | Lease 29",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 66.36,
            "width": 44.94,
            "height": 30.07
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 6,
    "category": "Responsibilities & Default",
    "pageTitle": "Replacements, Responsibilities, and Default",
    "image": "assets/lease-page-06-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-06.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "joint-several",
        "paragraphRef": "30",
        "title": "Joint and Several Responsibility",
        "leaseLanguage": "Each resident is jointly and severally liable for all Lease Contract obligations. If you or any guest or occupant violates the Lease Contract or rules, all residents are considered to have violated the Lease Contract. Our requests and notices (including sale notices) to any resident constitute notice to all residents and occupants. Notices and requests from any resident or occupant (including notices of tenancy termination, repair requests, and entry permissions) constitute notice from all residents.",
        "meaning": "Each resident is responsible for all obligations under the lease, not a divided share.",
        "whyItMatters": "Paragraph 30 states that if any resident, occupant or guest violates the lease, all residents are considered to have violated it, and that notice to one resident counts as notice to all. The supplied material frames this as: any violation by a guest falls under the responsibility of the resident.",
        "source": "WIL: Responsibilities of the Parties | Lease 30",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 15.0
          }
        ],
        "zoom": 1.9,
        "contentFlag": null
      },
      {
        "id": "replacements-subletting",
        "paragraphRef": "31",
        "title": "Replacements and Subletting",
        "leaseLanguage": "Replacing a resident, subletting, assignment, or granting a right or license to occupy is allowed only when we expressly consent in writing. If departing or remaining residents find a replacement resident acceptable to us before moving out and we expressly consent, in writing, to the replacement, subletting, assignment, or granting a right or any license to occupy, then: (Paragraph 1) a reletting charge will not be due; (Paragraph 2) a reasonable administrative (paperwork) and/or transfer fee will be due, and a rekeying fee will be due if rekeying is requested or required; and (Paragraph 3) the departing and remaining residents will remain liable for all lease obligations for the rest of the original lease term. … The departing resident will no longer have a right to occupancy or a security deposit refund, but will remain liable for the remainder of the original Lease Contract term unless we agree otherwise in writing — even if a new Lease Contract is signed.",
        "meaning": "Replacing a resident, subletting or assigning is allowed only with the owner’s express written consent.",
        "definitionTitle": "Lease assignment",
        "definition": "Also called a relet or lease transfer. All the interests and rights of the original resident are transferred to a new resident.",
        "definition2Title": "Sublease",
        "definition2": "An arrangement in which a tenant rents all or part of the leased property to a subtenant while remaining responsible for meeting all obligations under the lease with the landlord.",
        "whyItMatters": "31(Paragraph 3) states that the departing and remaining residents remain liable for all lease obligations for the rest of the original lease term, and the Procedures for Replacement paragraph repeats that the departing resident remains liable even if a new Lease Contract is signed.",
        "source": "WIL: Lease Assignment, Sublease Agreement | Lease 31 — flagged",
        "needsContent": false,
        "contentFlag": "conflict",
        "flagNote": "The supplied glossary defines Lease Assignment as leaving the original resident with “no further obligations pursuant to the lease after the lease is transferred.” Lease 31(Paragraph 3) says the opposite. This panel renders the lease text, which controls. The glossary definition has not been presented as the operative rule and needs your decision before launch.",
        "rects": [
          {
            "x": 4.47,
            "y": 20.57,
            "width": 45.06,
            "height": 15.57
          },
          {
            "x": 50.71,
            "y": 20.0,
            "width": 44.94,
            "height": 16.14
          }
        ],
        "zoom": 1.8
      },
      {
        "id": "responsibilities-owner",
        "paragraphRef": "32",
        "title": "Responsibilities of Owner",
        "leaseLanguage": "We’ll act with customary diligence to: (Paragraph 1) keep common areas reasonably clean, subject to paragraph 26 (Condition of the Premises and Alterations); (Paragraph 2) maintain fixtures, furniture, hot water, heating and A/C equipment; (Paragraph 3) comply with applicable federal, state, and local laws regarding safety, sanitation, and fair housing; and (Paragraph 4) make all reasonable repairs, subject to your obligation to pay for damages for which you are liable.",
        "meaning": "What the owner commits to with customary diligence — common areas, fixtures and equipment, applicable law, and reasonable repairs.",
        "whyItMatters": "Paragraph 32 sets out a specific sequence a resident must follow before terminating for a repair issue, including a written request, rent being current, a reasonable time to repair, and a written notice of intent to terminate.",
        "source": "WIL: Responsibilities of the Parties, Maintenance and Repairs | Lease 32",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 39.32,
            "width": 45.06,
            "height": 34.96
          }
        ],
        "zoom": 1.7,
        "contentFlag": null
      },
      {
        "id": "default-eviction",
        "paragraphRef": "33",
        "title": "Default by Resident and Eviction",
        "leaseLanguage": "You’ll be in default if you or any guest or occupant violates any terms of this Lease Contract including but not limited to the following violations: (Paragraph 1) you don’t pay rent or other amounts that you owe when due; … **Eviction.** If you default, we may end your right of occupancy by giving you a 24-hour written notice to vacate. We will provide a three (Paragraph 3) day notice for an eviction action due to nonpayment of rent. … Termination of your possession rights or subsequent reletting doesn’t release you from liability for future rent or other lease obligations.",
        "meaning": "The nine categories of default that Paragraph 33 lists, and the notices described for ending the right of occupancy.",
        "definitionTitle": "Eviction",
        "definition": "The formal process that terminates the lease early. Eviction takes place as a result of certain conditions, which the lease outlines.",
        "whyItMatters": "Paragraph 33 states that termination of possession rights or subsequent reletting does not release the resident from liability for future rent or other lease obligations.",
        "source": "WIL: Eviction | Lease 33 — flagged",
        "needsContent": false,
        "contentFlag": "ambiguous",
        "flagNote": "The supplied glossary describes eviction as the process that terminates the lease early. Lease Paragraph 33 describes the right of possession ending while liability for future rent continues. Confirm how you want this framed for residents.",
        "rects": [
          {
            "x": 4.47,
            "y": 74.32,
            "width": 45.06,
            "height": 22.11
          },
          {
            "x": 50.71,
            "y": 38.57,
            "width": 44.94,
            "height": 14.71
          }
        ],
        "zoom": 1.6
      },
      {
        "id": "holdover-mitigation",
        "paragraphRef": "33 (Holdover, Other Remedies, Mitigation)",
        "title": "Holdover, Other Remedies, and Mitigation",
        "leaseLanguage": "**Holdover.** You or any occupant, invitee, or guest must not hold over beyond the date contained in your move-out notice or our notice to vacate (or beyond a different move-out date agreed to by the parties in writing). … **Mitigation of Damages.** If you move out early, you’ll be subject to paragraph 11 (Early Move-Out) and all other remedies. We’ll exercise customary diligence to relet and mitigate damages. We’ll credit all subsequent rent that we actually receive from subsequent residents against your liability for past-due and future rent and other sums due.",
        "meaning": "Paragraph 33 describes what applies when a resident stays past the move-out date, and separately describes the owner’s commitment to exercise customary diligence to relet and to credit subsequent rent received.",
        "source": "Lease 33 (Holdover, Other Remedies, Remedies Cumulative, Mitigation of Damages) — supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 53.32,
            "width": 44.94,
            "height": 43.11
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 7,
    "category": "General Clauses & Notice",
    "pageTitle": "General Clauses and Move-Out Notice",
    "image": "assets/lease-page-07-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-07.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "general-clauses",
        "paragraphRef": "34, 35, 38",
        "title": "General Clauses Overview",
        "leaseLanguage": "**34. ENTIRE AGREEMENT.** Neither we nor any of our representatives have made any oral promises, representations, or agreements. This Lease Contract is the entire agreement between you and us. **35. NO AUTHORITY TO AMEND UNLESS IN WRITING.** Our representatives (including management personnel, employees, and agents) have no authority to waive, amend, or terminate this Lease Contract or any part of it, unless in writing … **38. MISCELLANEOUS.** … F. Neither an invalid clause nor the omission of initials on any page invalidates this Lease Contract.",
        "meaning": "The supplied material describes this part of the lease as giving a general understanding of clauses that have a direct effect on how the lease is used.",
        "whyItMatters": "Paragraph 34 states the written lease is the entire agreement and that no oral promises were made. Paragraph 35 states representatives have no authority to waive, amend or terminate the lease except in writing.",
        "source": "WIL: General Terms and Clauses | Lease 34, 35, 38",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 10.46,
            "width": 45.06,
            "height": 4.18
          },
          {
            "x": 4.47,
            "y": 14.68,
            "width": 45.06,
            "height": 8.5
          },
          {
            "x": 4.47,
            "y": 36.96,
            "width": 45.06,
            "height": 30.36
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      },
      {
        "id": "notice",
        "paragraphRef": "37",
        "title": "Notice",
        "leaseLanguage": "Except when notice or demand is required by statute, you waive any notice and demand for performance from us if you default. Written notice to or from our managers constitutes notice to or from us. Any person giving a notice under this Lease Contract should retain a copy of the memo, letter or fax that was given. Fax signatures are binding.",
        "meaning": "How notice is given and what counts as notice.",
        "whyItMatters": "Paragraph 37 states that written notice to or from managers constitutes notice to or from the owner, and that anyone giving notice should retain a copy.",
        "crossRef": [
          {
            "page": 9,
            "hotspot": "disclosure-notice",
            "label": "Who to contact (Paragraph 54), page 9"
          }
        ],
        "source": "WIL: Termination — notice requirements and delivery methods | Lease 37",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 29.5,
            "width": 45.06,
            "height": 7.43
          }
        ],
        "zoom": 2.0,
        "contentFlag": null
      },
      {
        "id": "obligation-to-vacate",
        "paragraphRef": "42",
        "title": "Obligation to Vacate",
        "leaseLanguage": "If we provide you with a notice to vacate, or if you provide us with a written notice to vacate or intent to move-out in accordance with paragraph 3 (Lease Term), and we accept such written notice, then you are required to vacate the premises and remove all of your personal property therefrom at the expiration of the Lease term without further notice or demand from us.",
        "meaning": "Paragraph 42 states that once a notice to vacate is given and accepted, the resident must vacate and remove all personal property at expiration of the term without further notice.",
        "source": "Lease 42 — supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 34.07,
            "width": 44.94,
            "height": 8.54
          }
        ],
        "zoom": 2.0,
        "contentFlag": null
      },
      {
        "id": "payments",
        "paragraphRef": "44",
        "title": "Payments",
        "leaseLanguage": "Payment of all sums is an independent covenant. At our option and without notice, we may apply money received (other than sale proceeds under paragraph 13 (Contractual Lien and Property Left in Apartment) or utility payments subject to governmental regulations) first to any of your unpaid obligations, then to current rent — regardless of notations on checks or money orders and regardless of when the obligations arose. All sums other than rent are due upon our demand.",
        "meaning": "Paragraph 44 states that payment of all sums is an independent covenant, and describes how money received may be applied to unpaid obligations before current rent, regardless of notations on the payment.",
        "source": "Lease 44 — connects to WIL: Rent. Supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 57.04,
            "width": 44.94,
            "height": 12.89
          }
        ],
        "zoom": 1.9,
        "contentFlag": null
      },
      {
        "id": "moveout-notice",
        "paragraphRef": "46",
        "title": "Move-Out Notice",
        "leaseLanguage": "Before moving out, either at the end of the lease term, any extension of the lease term, or prior to the end of the lease term, you must give our representative advance written notice of your intention to vacate as required by paragraph 3 (Lease Term). If you move out prior to the end of the lease term, your notice does not act as a release of liability for the full term of the Lease Contract. … All notices to vacate must be in writing and must provide the date by which you intend to vacate. If the notice does not comply with the time requirements of paragraph 3 (Lease Term), even if you move by the last date in the lease term, you will be responsible for an additional month’s rent.",
        "meaning": "The advance written notice required before moving out.",
        "definitionTitle": "Notice to vacate",
        "definition": "A formal notice given to the landlord by a resident stating they intend to end occupancy of the premises and not renew the lease.",
        "whyItMatters": "Paragraph 46 states all notices to vacate must be in writing and must state the intended move-out date, and describes the consequences when notice does not meet the timing requirements in 3.",
        "example": "Under this lease, 60 days written notice is required (Paragraph 3).",
        "source": "WIL: Notice to vacate, Termination | Lease 46, 3 — flagged",
        "needsContent": false,
        "contentFlag": "ambiguous",
        "flagNote": "The supplied glossary defines “notice to vacate” as resident-to-landlord only. The lease also uses the phrase for landlord-to-resident notices (33, 42). Consider distinguishing the two directions in the panel copy.",
        "rects": [
          {
            "x": 4.47,
            "y": 80.21,
            "width": 45.06,
            "height": 16.21
          },
          {
            "x": 50.71,
            "y": 79.64,
            "width": 44.94,
            "height": 10.18
          }
        ],
        "zoom": 1.7
      }
    ]
  },
  {
    "page": 8,
    "category": "Move-Out",
    "pageTitle": "Move-Out, Inspection, and Deposit Return",
    "image": "assets/lease-page-08-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-08.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "moveout-procedures",
        "paragraphRef": "47",
        "title": "Move-Out Procedures",
        "leaseLanguage": "The move-out date can’t be changed unless we and you both agree in writing. You won’t move out before the lease term or renewal period ends unless all rent for the entire lease term or renewal period is paid in full. … You’re prohibited by law from applying any security deposit to rent. You won’t stay beyond the date you are supposed to move out. All residents, guests, and occupants must vacate the apartment before the 30-day period for deposit refund begins. You must give us and the U.S. Postal Service, in writing, each resident’s forwarding address.",
        "meaning": "The formal procedures followed by management and the resident to complete a move-out.",
        "whyItMatters": "Paragraph 47 states that the move-out date cannot be changed unless both parties agree in writing, that the resident is prohibited by law from applying the security deposit to rent, and that all residents, guests and occupants must vacate before the 30-day deposit refund period begins.",
        "importantToKnow": "Paragraph 47 requires giving the owner and the U.S. Postal Service each resident’s forwarding address in writing.",
        "source": "WIL: Move-Out Procedures | Lease 47",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 2.5,
            "width": 45.06,
            "height": 8.54
          }
        ],
        "zoom": 1.9,
        "contentFlag": null
      },
      {
        "id": "cleaning",
        "paragraphRef": "48",
        "title": "Cleaning",
        "leaseLanguage": "You must thoroughly clean the apartment, including doors, windows, furniture, bathrooms, kitchen appliances, patios, balconies, garages, carports, and storage rooms. You must follow move-out cleaning instructions if they have been provided. If you don’t clean adequately, you’ll be liable for reasonable cleaning charges.",
        "meaning": "The expected cleaning of the unit a resident needs to do when moving out.",
        "whyItMatters": "Paragraph 48 lists the areas to be cleaned and states that inadequate cleaning creates liability for reasonable cleaning charges.",
        "source": "WIL: Cleaning | Lease 48",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 11.07,
            "width": 45.06,
            "height": 7.43
          }
        ],
        "zoom": 2.2,
        "contentFlag": null
      },
      {
        "id": "moveout-inspection",
        "paragraphRef": "49",
        "title": "Move-Out Inspection",
        "leaseLanguage": "Within 3 business days after the Lease Contract terminates and you vacate the premises or within 3 business days after you surrender and we accept back possession of the apartment — whichever occurs first — we’ll inspect your unit and prepare a comprehensive list of damage done during your occupancy (over and above normal wear) and the estimated dollar value of the damage. Upon your request within 5 business days after the Lease Contract terminates and you vacate the premises … you have the right to inspect the premises and inspect our list of damages and estimated dollar value of the damages.",
        "meaning": "After move-out an inspection is conducted, damage and alterations are documented, and the resident is sent a statement of charges.",
        "definitionTitle": "FAS (Final Account Statement)",
        "definition": "The statement sent after the move-out inspection listing all charges, including final utility and rent charges.",
        "whyItMatters": "Paragraph 49 describes the resident’s right to request and inspect the damage list within the stated window, and the effect of signing or of not objecting to the list.",
        "source": "WIL: Move-out Inspection, FAS | Lease 49 — flagged",
        "needsContent": false,
        "contentFlag": "ambiguous",
        "flagNote": "The supplied material says the inspection occurs “three (Paragraph 3) days” after move-out and describes a Service Manager taking pictures. Lease 49 says “within 3 business days” and does not name a role. Confirm which wording to display.",
        "rects": [
          {
            "x": 4.47,
            "y": 18.54,
            "width": 45.06,
            "height": 57.43
          },
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 37.36
          }
        ],
        "zoom": 1.7
      },
      {
        "id": "deposit-deductions",
        "paragraphRef": "50",
        "title": "Security Deposit Deductions and Wear and Tear",
        "leaseLanguage": "You’ll be liable for the following charges, if applicable: unpaid rent; unpaid utilities; unreimbursed service charges; repairs or damages caused by negligence, carelessness, accident, or abuse, including stickers, scratches, tears, burns, stains, or unapproved holes; replacement cost of our property that was in or attached to the apartment and is missing; … unreturned keys; missing or burned-out light bulbs; … animal-related charges under paragraph 28 (Animals) …",
        "meaning": "The charges the resident may be liable for at move-out.",
        "definitionTitle": "Wear and tear",
        "definition": "The acceptable amount of damage that does not trigger a monetary penalty deducted from the resident’s security deposit upon vacating the apartment.",
        "whyItMatters": "Paragraph 50 lists specific categories including unpaid rent and utilities, damage from negligence or unapproved holes, unreturned keys, and animal-related charges. This connects back to the Inventory and Condition form in 26.",
        "crossRef": [
          {
            "page": 5,
            "hotspot": "condition-alterations",
            "label": "Inventory and Condition form (Paragraph 26), page 5"
          }
        ],
        "source": "WIL: Wear and tear | Lease 50, 26",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 76.0,
            "width": 45.06,
            "height": 3.93
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      },
      {
        "id": "deposit-return",
        "paragraphRef": "51",
        "title": "Deposit Return",
        "leaseLanguage": "**Deposit Return and Forwarding Address.** In accordance with O.C.G.A. § 44-7-34 you are required to provide us written notice of your forwarding address, on or before termination of this Lease Contract. We’ll mail you, to the forwarding address you provide, your security deposit refund (less lawful deductions) and an itemized accounting of any deductions within the time provided by law to either the forwarding address if notice is provided, or if unknown, to the last known address.",
        "meaning": "Within 30 days the resident is sent the full or a partial deposit based on the FAS.",
        "whyItMatters": "Paragraph 51 requires the resident to provide written notice of a forwarding address on or before termination of the lease, and states that the refund and an itemized accounting are mailed to that address.",
        "example": "Of the $500.00 deposit, any lawful deductions are itemized and the remainder returned.",
        "source": "WIL: FAS / 30-day return | Lease 51, 49 — flagged",
        "needsContent": false,
        "contentFlag": "ambiguous",
        "flagNote": "The supplied material ties the 30 days to the move-out date. Lease 49 and 51 tie it to when the owner obtains possession or accepts surrender. Confirm the wording.",
        "rects": [
          {
            "x": 50.71,
            "y": 39.89,
            "width": 44.94,
            "height": 10.21
          }
        ],
        "zoom": 1.8
      },
      {
        "id": "surrender-abandonment",
        "paragraphRef": "51 (Surrender, Abandonment)",
        "title": "Surrender and Abandonment",
        "leaseLanguage": "**Surrender.** You have surrendered the apartment when: (Paragraph 1) the move-out date has passed and no one is living in the apartment in our reasonable judgment; or (Paragraph 2) all apartment keys and access devices listed in paragraph 5 (Keys) have been turned in where rent is paid — whichever date occurs first. **Abandonment.** You have abandoned the apartment when all of the following have occurred: (Paragraph 1) everyone appears to have moved out with the intention to give up all rights to occupy or use the apartment in our reasonable judgment; (Paragraph 2) you’ve been in default for non-payment of rent for 5 consecutive days …; and (Paragraph 3) you’ve not responded for 2 days to our notice left on the inside of the main entry door, stating that we consider the apartment abandoned.",
        "meaning": "Paragraph 51 defines when the apartment is considered surrendered, and the conditions that must all occur for it to be considered abandoned.",
        "source": "Lease 51 (Surrender, Abandonment) — supply copy, or approve this neutral restatement.",
        "needsContent": true,
        "rects": [
          {
            "x": 50.71,
            "y": 50.14,
            "width": 44.94,
            "height": 46.29
          }
        ],
        "zoom": 1.9,
        "contentFlag": null
      }
    ]
  },
  {
    "page": 9,
    "category": "Disclosures & Signatures",
    "pageTitle": "Disclosures and Signatures",
    "image": "assets/lease-page-09-sanitized.webp",
    "pageTextUrl": "assets/text/lease-page-09.txt",
    "imageWidth": 1700,
    "imageHeight": 2800,
    "hotspots": [
      {
        "id": "disclosure-notice",
        "paragraphRef": "54",
        "title": "Disclosure Notice — Who to Contact",
        "leaseLanguage": "Name and address of the company or party authorized to manage the apartment community: … Name and address of the company or party authorized to receive notices or lawsuits: … Name, address and phone number of managing agent for the property for notice purposes. This person or entity is authorized to receive services of process and to manage the property.",
        "meaning": "The parties authorized to manage the community, to receive notices or lawsuits, and to receive service of process.",
        "whyItMatters": "Paragraph 54 is where a resident finds the correct name and address for sending formal notice — the same notices required under 27, 37 and 46.",
        "example": "Managed by Meridian Residential Management LLC, 2400 Sterling Park Drive, Suite 450, Atlanta, GA 30328. Managing agent for the property: Oakridge Apartments, 4120 Willow Bend Parkway, Marietta, GA 30060, (770) 555-0134.",
        "crossRef": [
          {
            "page": 7,
            "hotspot": "notice",
            "label": "Notice (Paragraph 37), page 7"
          }
        ],
        "source": "WIL: Parties, Property Description | Lease 54",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 2.5,
            "width": 45.06,
            "height": 13.93
          },
          {
            "x": 50.71,
            "y": 19.82,
            "width": 44.94,
            "height": 8.75
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "managing-agent-license",
        "paragraphRef": "54",
        "title": "Managing Agent License Disclosure",
        "leaseLanguage": "Management’s corporate name and license number as required by the rules of the Georgia Real Estate Commission (Ga. R. & Reg. 520-1-.10 are … (Corporate Name of Licensed Managing Agent) and … (GREC corporate license number of Managing Agent).",
        "meaning": "Paragraph 54 also records the licensed managing agent’s corporate name and license number, as required by Georgia Real Estate Commission rules.",
        "source": "Lease 54 — supply copy, approve this neutral restatement, or omit this hotspot.",
        "needsContent": true,
        "rects": [
          {
            "x": 4.47,
            "y": 16.46,
            "width": 45.06,
            "height": 8.82
          }
        ],
        "zoom": 2.2,
        "contentFlag": null
      },
      {
        "id": "signatures",
        "paragraphRef": "Signature block, 53, 38(F)",
        "title": "Signatures",
        "leaseLanguage": "Resident or Residents (all sign below) / Date Signed … Owner or Owner’s Representative (signing on behalf of owner) / Date Signed … You are legally bound by this document. Read it carefully before signing.",
        "meaning": "The landlord and resident or residents must sign the lease to acknowledge they have read, understood and agreed to its terms.",
        "whyItMatters": "The block carries the printed reminder that the signer is legally bound by the document and should read it carefully before signing.",
        "importantToKnow": "Paragraph 53 states the lease is executed in multiple originals and that a copy or scan may be treated as an original. 38(F) states that the omission of initials on any page does not invalidate the lease. Signature lines are intentionally left blank in this educational example.",
        "source": "WIL: Signatures | Signature block, Lease 53, 38",
        "needsContent": false,
        "rects": [
          {
            "x": 50.71,
            "y": 2.5,
            "width": 44.94,
            "height": 17.14
          },
          {
            "x": 4.47,
            "y": 25.43,
            "width": 45.06,
            "height": 4.75
          }
        ],
        "zoom": 1.8,
        "contentFlag": null
      },
      {
        "id": "special-provisions-continued",
        "paragraphRef": "10 (continued)",
        "title": "Special Provisions (Continued)",
        "leaseLanguage": "SPECIAL PROVISIONS (CONTINUED FROM PAGE 2) ____",
        "meaning": "The continuation space for special provisions begun on page 2.",
        "definitionTitle": "Special Provisions",
        "definition": "Specific conditions or requirements peculiar to the lease, supplemental to the General Provisions. Should the Special Provisions conflict with the General Provisions, the Special Provisions shall prevail.",
        "whyItMatters": "A resident checking for lease-specific terms needs to look in both places.",
        "importantToKnow": "This space is blank in this lease. The only special provision appears on page 2.",
        "crossRef": [
          {
            "page": 2,
            "hotspot": "special-provisions",
            "label": "Special Provisions (Paragraph 10), page 2"
          }
        ],
        "source": "WIL: Special Provisions | Lease 10, page 9 continuation",
        "needsContent": false,
        "rects": [
          {
            "x": 4.47,
            "y": 41.07,
            "width": 91.18,
            "height": 40.71
          }
        ],
        "zoom": 1.6,
        "contentFlag": null
      }
    ]
  }
];

export default LEASE;
