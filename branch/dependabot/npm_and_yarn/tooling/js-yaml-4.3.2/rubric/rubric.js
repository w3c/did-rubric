var rubricJson = {
  "categories": [
    {
      "name": "Rulemaking",
      "description": "Rulemaking criteria address who makes the rules and how. Output of rulemaking are the rules.",
      "criteria": [
        {
          "name": "Open contribution (participation)",
          "id": "https://www.w3.org/TR/did-rubric#criteria-1",
          "source": ".",
          "version": "1.0.1",
          "question": {
            "question": "How open is participation in governance decisions?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Anyone can participate in an open, fair process where all participants have equal opportunity to be heard and influence decisions."
              },
              {
                "label": "B",
                "meaning": "Anyone can comment and contribute to open debate, but decisions are ultimately made by a closed group."
              },
              {
                "label": "C",
                "meaning": "Debate is restricted to a selected but known group."
              },
              {
                "label": "D",
                "meaning": "Debate is conducted in secret by an unknown group."
              }
            ]
          },
          "relevance": "Governance determines how the rules of the underlying network are set and maintained. The more parties that are able to contribute to governance debates, the more decentralized the governance.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-1",
              "method": "did:web",
              "spec": "A",
              "net": "B",
              "reg": "C/D",
              "note": "Spec (A): Owned by CCG at W3C, anyone can join.\rNet (B): Most of the network is controlled by public or private entities.\nReg: Controlled by the Domain Holder, which is a restricted set (C) and in some cases may not be known to the resolving party (D).",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-2",
              "method": "did:git",
              "spec": "B",
              "net": "C",
              "reg": "D",
              "evaluationCitation": "#eval-1",
              "note": "The git network is the git source code, which is controlled (currently) by 16 people. They do not have a public issues process. The spec is openly developed on github by a listed set of contributors and issues may be raised by anyone. Each registry is controlled by potentially unknown parties as negotiated in \"meatspace\"."
            },
            {
              "id": "a-3",
              "method": "did:btcr",
              "spec": "B",
              "net": "D",
              "reg": "D",
              "evaluationCitation": "#eval-1",
              "note": "Changes to the bitcoin protocol are chaotic and uncertain. They use BIPs, but the path to adoption is uncertain and the relative power of developers, miners, and users is open to debate. The spec is openly developed on github by a listed set of contributors and issues may be raised by anyone."
            }
          ]
        },
        {
          "name": "Transparency",
          "id": "https://www.w3.org/TR/did-rubric#criteria-2",
          "source": ".",
          "question": {
            "question": "How visible are rulemaking processes?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Agendas and participation details for all meetings are publicly announced, the meetings are broadcast in real-time to any listeners, and all minutes and recordings are captured in realtime and publicly reviewable in perpetuity."
              },
              {
                "label": "B",
                "meaning": "Minutes of meetings are reviewable by the public, including all votes and who cast them, but real-time observation may be limited."
              },
              {
                "label": "C",
                "meaning": "All current rules are publicly available."
              },
              {
                "label": "D",
                "meaning": "Rules may be changed without public notice."
              }
            ],
            "possibleResponses[0]": {
              "meaning": "Agendas and participation details for all governance discussions are publicly announced, any meetings are broadcast in real-time to any listeners, and all minutes and recordings are captured in realtime and publicly reviewable in perpetuity."
            }
          },
          "relevance": "While participation measures active contribution, transparency measures the visibility of discussions affecting rule making. If such discussions are only visible to a limited group, it centralizes decision making in ways that Evaluators and users cannot easily see.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "1.0.1",
          "exampleAssessments": [
            {
              "id": "a-4",
              "method": "did:btcr",
              "spec": "C",
              "net": "C",
              "reg": "C",
              "evaluationCitation": "#eval-1",
              "note": "The spec is maintained by volunteers, operating in an open fashion but without formal processes for announcements and meeting notes. The network and registry are bitcoin, which has a fairly public but messy innovation process, without formal meetings or votes."
            },
            {
              "id": "a-5",
              "method": "did:ion",
              "spec": "A",
              "net": "A-/A",
              "reg": "A-/A",
              "note": "Spec (A): method spec maintained by DIF, using open and transparent processes.\nNet (A-/A) and Reg (A-/A): It can be hard to track conversations about Bitcoin Improvement Proposals (BIPs) and decision processes differ for different BIPs, which can affect visibility (A-). IPFS has great support for realtime zoom participation and Notes(A)",
              "evaluationCitation": "#eval-5"
            },
            {
              "id": "a-6",
              "method": "did:peer",
              "spec": "C",
              "net": "n/a",
              "reg": "B",
              "evaluationCitation": "#eval-1",
              "note": "Rules for accepting changes to the business rules are bilaterally negotiated between the peers, subject to conformance with the specification."
            }
          ]
        },
        {
          "name": "Separation of Power",
          "question": {
            "question": "What decision making bodies are involved in rulemaking?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/1",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Rulemaking rarely occurs in simple structures. Identifying the different organizational entities that participate in setting rules allows evaluators to understand how rules get made. Understanding how rules get helps predict possible future developments."
              }
            ]
          },
          "relevance": "It is worth noting that all entities who are beholden to sovereign states, which is pretty much all corporations, non-profits, and individuals, have consequences for violating the laws, regulations, and lawful court orders within their jurisdiction. Some decentralized systems go to great lengths to minimize the impact of possible coercion, including actions by nation states. It is understood that any participant in the process may be subject to the rule of law from any number of jurisdictions, e.g., patent law, employment law, financial reporting laws, dumping laws, zoning, environmental regulations, etc. As a result, all decision making bodies are subject to the jurisdictions in which they operate.This complexity is true for all DID methods and, to our knowledge, most, if not all, DID methods have no intrinsic relationship to any particular jurisdiction. As such, we do not recommend including jurisdictional players, e.g., nation-states, cities, provinces, etc., as distinct operational layers, unless those players have a distinct role to play for that particular DID method.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-37",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-7",
              "method": "did:v1.testnet",
              "decision making body": "Digital Bazaar",
              "note": "Digital Bazaar created Veres One and is shepherding it through development to production.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-8",
              "method": "did:v1.production",
              "decision making body": "Veres One Community Group",
              "note": "In production, the Veres One Community Group is the public-facing decision making body designed for discussing technical matters.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-9",
              "method": "did:v1.production",
              "decision making body": "Veres Foundation Board",
              "note": "The Veres Foundation holds responsibility for the financial and legal decisions necessary to keep the network operational.",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Decision Making Structures",
          "question": {
            "question": "How is each decision making body structured?",
            "instruction": "Evaluate this criteria for each decision making body from https://www.w3.org/TR/did-rubric#criteria-37."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Governance Structure",
                "type": "enhancedLetter",
                "propertyRef": "governance structure"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/2",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Individual. Sole proprietorship"
              },
              {
                "label": "B",
                "meaning": "Informal Group. Unincorporated Partnership / Open Community"
              },
              {
                "label": "C",
                "meaning": "For-profit formal organization. For-profit Corporation / LLC / Partnership"
              },
              {
                "label": "D",
                "meaning": "Quasi not-for-profit formal organization. B-Corp https://bcorporation.net/  / CIC https://en.wikipedia.org/wiki/Community_interest_company"
              },
              {
                "label": "E",
                "meaning": "Recognized not-for-profit formal organization. Not-for-profit public benefit organization (NGOs, 501c(3/4/6), etc)"
              },
              {
                "label": "F",
                "meaning": "NGO"
              },
              {
                "label": "G",
                "meaning": "Trade Association"
              },
              {
                "label": "H",
                "meaning": "Charity"
              },
              {
                "label": "I",
                "meaning": "Public agency (federal, state, or local)"
              },
              {
                "label": "J",
                "meaning": "Other"
              }
            ]
          },
          "relevance": "Different governance structures have different implications for how decisions are made and who wields influence throughout the process.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-38",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-10",
              "method": "did:v1.testnet",
              "decision making body": "Digital Bazaar",
              "governance structure": "C",
              "note": "Digital Bazaar is a closely held startup with a seventeen year track record. (C)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-11",
              "method": "did:v1.production",
              "decision making body": "Veres One Community Group",
              "governance structure": "E",
              "note": "The Veres One Community Group is a community group operating under the rules of the World Wide Web Consortium. Open to the public, self-elected leadership (E)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-12",
              "method": "did:v1.production",
              "decision making body": "Veres Foundation Board",
              "governance structure": "E",
              "note": "The Veres Foundation operates under the non-profit regulations of Ontario, Canada. Self-propagating board of directors overseeing a non-profit organization. (E)",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Cost to introduce rule change",
          "question": {
            "question": "How expensive is it to get a governance decision before each of the deliberating bodies?",
            "instruction": "Evaluate this criteria for each decision making body from https://www.w3.org/TR/did-rubric#criteria-37."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Cost",
                "type": "enhancedLetter",
                "propertyRef": "cost"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/3",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Free to all"
              },
              {
                "label": "B",
                "meaning": "Inexpensive, but accessible"
              },
              {
                "label": "C",
                "meaning": "Modest cost for interested parties"
              },
              {
                "label": "D",
                "meaning": "Expensive and restricted"
              },
              {
                "label": "E",
                "meaning": "Not possible to participate because the rules are immutable"
              }
            ]
          },
          "relevance": "Governance takes resources, which can limit the ability of interested parties to influence rulemaking. Generally, the more expensive it is to participate, the more governance centralizes to those parties most able to make the investment.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-39",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-13",
              "method": "did:v1.testnet",
              "decision making body": "Digital Bazaar",
              "cost": "D+",
              "note": "Digital Bazaar is a small development team working with select customers to define Veres One. There is no explicit mechanism for outside participation, however, the governance framework has been developed with high transparency through github and the W3C Veres One Community Group. (D+)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-14",
              "method": "did:v1.production",
              "decision making body": "Veres One Community Group",
              "cost": "B",
              "note": "Community group is open to the public. Any member of the community group can propose changes to the method. Group consensus then determines which proposals advance to the Veres Foundation. (B)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-15",
              "method": "did:v1.production",
              "decision making body": "Veres Foundation Board",
              "cost": "C-",
              "note": "For technical decisions, the Foundation strongly prefers proposals to reach consensus in the community group. For operational, financial, and legal decisions, the board will likely reserve the right to make decisions independent of the community group. Board bylaws are under development as of this evaluation. (C-)",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Cost to decide on rule changes",
          "question": {
            "question": "How expensive is it to participate as a peer in a governance decision by the governing body?",
            "instruction": "Evaluate this criteria for each decision making body from https://www.w3.org/TR/did-rubric#criteria-37."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Cost",
                "type": "enhancedLetter",
                "propertyRef": "cost"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/4",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Free to all"
              },
              {
                "label": "B",
                "meaning": "Inexpensive, but accessible"
              },
              {
                "label": "C",
                "meaning": "Modest cost for interested parties"
              },
              {
                "label": "D",
                "meaning": "Expensive and restricted"
              },
              {
                "label": "E",
                "meaning": "Not possible to participate because the rules are immutable"
              }
            ]
          },
          "relevance": "Governance takes resources, which can limit the ability of interested parties to influence rulemaking. Generally, the more expensive it is to participate, the more governance centralizes to those parties most able to make the investment.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-40",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-16",
              "method": "did:v1.testnet",
              "decision making body": "Digital Bazaar",
              "cost": "D",
              "note": "The most common way to be involved is by invitation from Digital Bazaar, either as an employee, subcontractor, or advisor. (D)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-17",
              "method": "did:v1.production",
              "decision making body": "Veres One Community Group",
              "cost": "B",
              "note": "The largest cost is time to participate and a track record for credibility. (B)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-18",
              "method": "did:v1.production",
              "decision making body": "Veres Foundation Board",
              "cost": "D",
              "note": "Foundation leadership is initially selected by Digital Bazaar and self-selecting thereafter. (D)",
              "evaluationCitation": "#eval-3"
            }
          ]
        }
      ]
    },
    {
      "name": "Design",
      "description": "Design criteria addresses the method as designed. In other words, the output of the rulemaking: what rules apply to this DID method?",
      "criteria": [
        {
          "name": "Permissioned Operation",
          "id": "https://www.w3.org/TR/did-rubric#criteria-6",
          "source": ".",
          "question": {
            "question": "Does one need permission to use the DID Method?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Anyone can participate fully (full read/write and participation in consensus)."
              },
              {
                "label": "B",
                "meaning": "Anyone can read/write, but consensus mechanism is permissioned."
              },
              {
                "label": "C",
                "meaning": "Anyone can read, but writing and consensus is permissioned."
              },
              {
                "label": "D",
                "meaning": "All participation is permissioned."
              }
            ]
          },
          "relevance": "Permissioned operation impacts the availability of the network to various participants, which can affect inclusivity with regard to underserved or vulnerable populations. Permissioned networks also expose the permission giver to legal or other attacks.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "1.0.1",
          "exampleAssessments": [
            {
              "id": "a-19",
              "method": "did:ethr",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-1",
              "note": "Ethereum is open to anyone. The registry is accessible to anyone."
            },
            {
              "id": "a-20",
              "method": "did:v1.production",
              "net": "B+",
              "reg": "B+",
              "note": "Net (B+) and Reg (B+)The ledger is available to the public for reading, and anyone can submit a transaction (either through paying an accelerator or in-kind contribution), however, only Witnesses are able to approve updates to the chain. The propagation rules of the peer network restrict the ability for Witnesses to selectively approve transactions, but ultimately, the decision remains with a supermajority of Witnesses.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-21",
              "method": "did:git",
              "net": "A",
              "reg": "D",
              "evaluationCitation": "#eval-1",
              "note": "Git software is available to anyone. Participation and access is controlled by the repo maintainers."
            }
          ]
        },
        {
          "name": "Interoperability",
          "id": "https://www.w3.org/TR/did-rubric#criteria-7",
          "source": ".",
          "question": {
            "question": "Does the DID Method restrict access or functionality to particular client software implementations?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Any wallet can work with any resolver on any registry,"
              },
              {
                "label": "B",
                "meaning": "Any wallet can work with multiple resolvers and multiple registries,"
              },
              {
                "label": "C",
                "meaning": "Some implementations of some wallets can work with some resolvers,"
              },
              {
                "label": "D",
                "meaning": "There is a single combined suite of resolver, registry, and wallet."
              }
            ]
          },
          "relevance": "The ability to communicate with different (ideally all) resolvers and registries significantly increases the applicability of a decentralized identity layer / usability of a given wallet. Vice versa, limited capability to work with other Methods and registries restrict usage.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "2.0.0",
          "exampleAssessments": [
            {
              "id": "a-78",
              "method": "did:v1.production",
              "spec": "A",
              "net": "A",
              "reg": "A",
              "note": "Spec (A), Net (A) and Reg (A): Veres One uses 100% W3C conformant representations, without regard to which wallet implementation is used.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-39",
              "method": "did:btcr",
              "spec": "A",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-1",
              "note": "Bitcoin has no restrictions on the software used to access the network."
            },
            {
              "id": "a-79",
              "method": "did:web",
              "spec": "A",
              "net": "A-",
              "reg": "A-",
              "note": "Spec (A), Net (A-) and Reg (A-): Web-based wallets may have complications from CORS (cross-origin resource sharing), but in general any “wallet” is compatible. Although a given service (hosting or website, etc.) could add a layer of permissioned restrictions, the did:web Method does not require it. Similarly, nation-state level firewalls could restrict access at various layers, but, again, the Method does not require it.",
              "evaluationCitation": "#eval-4"
            }
          ]
        },
        {
          "name": "Scope of Usage",
          "id": "https://www.w3.org/TR/did-rubric#criteria-8",
          "source": ".",
          "question": {
            "question": "How widely can DIDs of this Method be used?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Universal: DIDs can only be created and used universally, between any number of parties."
              },
              {
                "label": "B",
                "meaning": "Contextual: DIDs can be created and used contextually, between any set of collaborating parties."
              },
              {
                "label": "C",
                "meaning": "Paired: DID can be created and used pairwise, between any two parties."
              },
              {
                "label": "D",
                "meaning": "Central: DIDs can only be created and used with a single, centralized party."
              }
            ]
          },
          "relevance": "Different Methods enable different scopes in which a DID might be considered usable or valid. Some DIDs are only resolvable within a limited context, others are suitable for global use. Contextual DIDs are a middle ground that allow a set of parties to use DIDs, while those outside that group cannot meaningfully do so. Finally, central DIDs use the DID syntax and DID Documents to establish secure communications, but authority to use these DIDs resides with the central party, who may revoke that ability at their discretion.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "1.0.1",
          "exampleAssessments": [
            {
              "id": "a-22",
              "method": "did:peer",
              "net": "A+",
              "reg": "C",
              "evaluationCitation": "#eval-1",
              "note": "Did:peer is communication-layer independent, so it can be used on any network, including direct physical links. However, only those parties to the creation of the DID can actually use it. The DIDs have no use outside that direct peer-to-peer relationship."
            },
            {
              "id": "a-23",
              "method": "did:web",
              "net": "A/B",
              "reg": "A/B",
              "note": "In general, did:web DIDs can be used for anything, by anyone (A). However, some implementers believe did:web should only be used to represent institutional entities (who tend to already have good systemic controls over web infrastructure). (B)",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-24",
              "method": "did:ethr",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-1",
              "note": "Open, permissionless, and globally resolvable."
            }
          ]
        },
        {
          "name": "Cryptocurrency",
          "question": {
            "question": "What cryptocurrency, if any, is required for Method operations?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "None"
              },
              {
                "label": "B",
                "meaning": "At least one. [List the required crypto-currencies in the Notes]"
              }
            ]
          },
          "relevance": "The use of particular cryptocurrencies create a long term dependency on the viability of those currencies. Such dependency may be a deterrent for some applications. Similarly, if no cryptocurrency is used, there is likely a dependency elsewhere, such as on the organization managing consensus rules and operation.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-41",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/5",
          "exampleAssessments": [
            {
              "id": "a-25",
              "method": "did:v1.testnet",
              "spec": "A",
              "note": "Spec (A): The V1 DID Method operates on its own blockchain with a novel, non-cryptocurrency consensus algorithm.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-26",
              "method": "did:v1.production",
              "spec": "A",
              "note": "Spec (A): The V1 DID Method operates on its own blockchain with a novel, non-cryptocurrency consensus algorithm.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-27",
              "method": "did:web",
              "spec": "A",
              "note": "Spec (B): did:web, which is based on the World Wide Web and DNS does not rely on any cryptocurrency.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-28",
              "method": "did:ion",
              "spec": "B",
              "note": "Spec (B): One must use bitcoin. BTC is required for anchoring transactions. The IPFS layer does not require cryptocurrency, but the bitcoin layer is required for all operations.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Offline creation",
          "question": {
            "question": "Does the Method require network communications to create a DID?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "No. Creation is expected to be off-line. Only resolution, updates and deactivations require network or registry interaction"
              },
              {
                "label": "B",
                "meaning": "Yes. Creation requires network coordination with a single party to complete the DID creation"
              },
              {
                "label": "C",
                "meaning": "Yes. Creation requires network coordination with multiple parties in a known, constrained group to complete the DID creation"
              },
              {
                "label": "D",
                "meaning": "Yes. Creation requires network coordination with and acceptance by an open, global consensus system to complete DID creation"
              }
            ]
          },
          "relevance": "Communication is costly, with increasing costs the more parties are involved. This cost is not just in terms of the connection expense, but also the latency in processing transactions. The ability to create a DID without registering it on a global shared state greatly reduces the technical and financial cost of the method.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-42",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/7",
          "exampleAssessments": [
            {
              "id": "a-29",
              "method": "did:v1.testnet",
              "spec": "A",
              "note": "Veres One DID creation is a local cryptographic process. There is no network or registry involved.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-30",
              "method": "did:v1.production",
              "spec": "A",
              "note": "Veres One DID creation is a local cryptographic process. There is no network or registry involved.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-31",
              "method": "did:web",
              "spec": "B+",
              "note": "The DID controller must be able to communicate with the web server that is hosting the DID Document. However, in some configurations, this may not mean accessing the global network. For example, if you are physically present at the hosting server, one can create the DID Document files directly without network access. To resolve the DID Document those files must be published at an accessible endpoint, but creation doesn’t need the network.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-32",
              "method": "did:ion",
              "spec": "A",
              "note": "All new did:ions start offline. Only updates need to be published.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Update Scalability",
          "question": {
            "question": "Assuming an average of no more than 1 update per quarter, how many DIDs can this method support?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Greater than 5 billion"
              },
              {
                "label": "B",
                "meaning": "Greater than 1 billion"
              },
              {
                "label": "C",
                "meaning": "Greater than 500 million"
              },
              {
                "label": "D",
                "meaning": "Greater than 50 million"
              },
              {
                "label": "E",
                "meaning": "Greater than 5 million"
              },
              {
                "label": "F",
                "meaning": "Less than 5 million"
              }
            ]
          },
          "relevance": "Some DID methods may be able to support the world's population, others may be more suitable to a particular type of use where only a small number of DIDs need to be supported. This gives a rough idea of the population base you may expect a particular DID method to support.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-43",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/8",
          "exampleAssessments": [
            {
              "id": "a-33",
              "method": "did:v1.testnet",
              "reg": "C",
              "note": "Veres One can handle ~750 million updates per quarter at the current architecture of 13 witnesses running stock amazon instances. Performance can be improved through a variety of approaches with different cost and engineering tradeoffs.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-34",
              "method": "did:v1.production",
              "reg": "C",
              "note": "Veres One can handle ~750 million updates per quarter at the current architecture of 13 witnesses running stock amazon instances. Performance can be improved through a variety of approaches with different cost and engineering tradeoffs.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-35",
              "method": "did:web",
              "reg": "A",
              "note": "did:web is a partitioned namespace where any given partition could support billions of DIDs. The URL behind the DID could be hosted by a small hosting service that can only handle a limited # of DIDs, but the hosting of a given domain could also be scaled arbitrarily.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-36",
              "method": "did:ion",
              "reg": "A",
              "note": "A single did:ion node, which limits its operations to 10,000 ops per transaction, is capable of anchoring ~131 million DIDs, updated every quarter. However, any number of did:ion nodes can independently anchor different did:ion operations, making the capacity effectively limited only by the blocksize of bitcoin (and the impact from other transactions competing for space in each block).",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Creation Cost",
          "question": {
            "question": "How much does it cost a DID creator to create a DID?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Only operational costs of running the algorithm (no externalized expense)"
              },
              {
                "label": "B",
                "meaning": "Less than $0.01"
              },
              {
                "label": "C",
                "meaning": "Less than $0.10"
              },
              {
                "label": "D",
                "meaning": "Less than $1"
              },
              {
                "label": "E",
                "meaning": "Less than $10"
              },
              {
                "label": "F",
                "meaning": "$10 or greater"
              }
            ]
          },
          "relevance": "Almost all operations are sensitive to the cost of creating the underlying identifiers. If such costs are close to zero, broad use of ephemeral keys is possible. As costs increase, it becomes more and more necessary to limit the number of identifiers created in order to keep systems.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-44",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/9",
          "exampleAssessments": [
            {
              "id": "a-37",
              "method": "did:v1.testnet",
              "reg": "A",
              "note": "Creation is FREE",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-38",
              "method": "did:v1.production",
              "reg": "A",
              "note": "Creation is FREE",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-39",
              "method": "did:web",
              "reg": "A",
              "note": "Assuming you already have a hosting provider providing a website, this cost is essentially free. If you don’t, you may incur the cost of establishing a website (and perhaps a domain purchase or TLD application).",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-40",
              "method": "did:ion",
              "reg": "A",
              "note": "Offline creation has no network costs, just local computation.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Update & Deletion Cost (Out-of-pocket)",
          "question": {
            "question": "How much does it cost*, out of pocket, to update or deactivate a DID Document? If the method has a tiered or variable cost structure, list all responses that apply and specify the cost structure in the Notes *This is the cost to the DID Document controller."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Only operational costs of running the algorithm (no externalized expense)"
              },
              {
                "label": "B",
                "meaning": "Less than $0.01"
              },
              {
                "label": "C",
                "meaning": "Less than $0.10"
              },
              {
                "label": "D",
                "meaning": "Less than $1"
              },
              {
                "label": "E",
                "meaning": "Less than $10"
              },
              {
                "label": "F",
                "meaning": "$10 or greater"
              }
            ]
          },
          "relevance": "Depending on the method and governance, the price of updating and deleting a DID Document will inform the cost of doing business with the particular method. Depending on the use case in mind this can be used, along with the scalability questions, to estimate the cost of maintaining a network using this DID method.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-45",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/10",
          "exampleAssessments": [
            {
              "id": "a-41",
              "method": "did:v1.testnet",
              "reg": "n/a",
              "note": "Veres One Test Net does not have pricing.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-42",
              "method": "did:v1.production",
              "reg": "D/A",
              "note": "Veres One updates target a retail cost of ~$0.25, which will be set based on operational costs of the Veres Foundation, for wholesale pricing. Accelerators may mark up these prices based on their business model and approach. The estimates for these costs are currently under evaluation. Prices will also vary based on the size of the update, with larger updates costing more. (D)\nThe costs and in-kind requirements will be managed by the Foundation based on market dynamics. (A)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-43",
              "method": "did:web",
              "reg": "A",
              "note": "Assuming you already have a hosting provider providing a website, this cost is essentially free. If you don’t, you may incur the cost of establishing a website (and perhaps a domain purchase or TLD application).",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-44",
              "method": "did:ion",
              "reg": "B/C",
              "note": "Node operators who have staked ~$100,000 USD in BTC may update 10,000 DIDs in a single bitcoin transaction; at an average transaction fee of $3 (the current annualized average), that is $0.0003 per update. (B)\nNode operators who have not staked any BTC may update up to 100 DIDs in a single bitcoin transaction; at an average transaction fee of $3 (the current annualized average), that is $0.03 per update. (C)\nCost scales deterministically between these two ends of the price spectrum.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Update & Deletion Cost (in-kind)",
          "question": {
            "question": "How much does it cost to update or deactivate a DID Document using in-kind contributions?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Only operational costs of running the algorithm (no externalized expense)"
              },
              {
                "label": "B",
                "meaning": "Less than $0.01"
              },
              {
                "label": "C",
                "meaning": "Less than $0.10"
              },
              {
                "label": "D",
                "meaning": "Less than $1"
              },
              {
                "label": "E",
                "meaning": "Less than $10"
              },
              {
                "label": "F",
                "meaning": "$10 or greater"
              }
            ]
          },
          "relevance": "Depending on the method and governance, there may be ways of reducing (or removing) the cost of Updating or Deleting a DID Document, such as volunteering with the governance body or doing a set of work the network needs done.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-46",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/11",
          "exampleAssessments": [
            {
              "id": "a-45",
              "method": "did:v1.testnet",
              "reg": "n/a",
              "note": "Veres One Testnet does not have pricing.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-46",
              "method": "did:v1.production",
              "reg": "B",
              "note": "The Foundation-established cost can be earned by in-kind contributions, allowing hosted participants to post transactions without out-of-pocket expense. The amortized cost of this is expected to be less than “retail” but remain subject to several variables. For this evaluation, we estimate the in-kind costs for Veres One can be reduced to less than $0.01 per update, but ultimately this will be subject both to the Foundation’s in-kind rules as well as the marginal cost of satisfying those rules.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-47",
              "method": "did:web",
              "reg": "n/a",
              "note": "The method itself does not provide for in-kind contributions.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-48",
              "method": "did:ion",
              "reg": "n/a",
              "note": "The method does not provide for any kind of in-kind contributions. It is worth noting that some node operators are offering free updates to the public based on a modest Proof of Work.",
              "evaluationCitation": "#eval-5"
            }
          ]
        }
      ]
    },
    {
      "name": "Operation",
      "description": "Operation criteria address how the rules are operationalized, ie., how are the rules embodied in a working system.",
      "criteria": [
        {
          "name": "Financial accountability",
          "id": "https://www.w3.org/TR/did-rubric#criteria-9",
          "source": ".",
          "question": {
            "question": "How transparent are the economics of the Method?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "All operational finances are transparent and accounted for."
              },
              {
                "label": "B",
                "meaning": "Compensation for primary operators is transparent."
              },
              {
                "label": "C",
                "meaning": "Some financial flows are visible."
              },
              {
                "label": "D",
                "meaning": "Operation is privatized with no visibility."
              }
            ]
          },
          "relevance": "Similar to Governance, financial accountability reflects the integrity and sustainability of the DID registry. The more open, transparent, and accountable the system, the greater the confidence a DID controller may have that it will remain stable and operational, and therefore continue to provide service.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "1.0.1",
          "exampleAssessments": [
            {
              "id": "a-49",
              "method": "did:peer",
              "net": "D",
              "reg": "D",
              "evaluationCitation": "#eval-1",
              "note": "The financials of both parties have no visibility."
            },
            {
              "id": "a-106",
              "method": "did:v1.production",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B): Once operations are transferred to the Foundation, finances should be considerably more transparent.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-51",
              "method": "did:btcr",
              "net": "A-",
              "reg": "A-",
              "evaluationCitation": "#eval-1",
              "note": "Bitcoin is transparent, although operations are somewhat obscured by pseudonymous transaction addresses."
            }
          ]
        },
        {
          "name": "Limited resource resolution",
          "id": "https://www.w3.org/TR/did-rubric#criteria-10",
          "source": ".",
          "version": "1.0.0",
          "question": {
            "question": "How much memory is required for DID resolution, without relying on authoritative intermediaries (e.g. blockchain explorer APIs)? We consider the amount of memory required to fully resolve a DID of the method, whether that memory is stored locally or processed ephemerally via communications."
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Minimal. Less than 1MB"
              },
              {
                "label": "B",
                "meaning": "Modest. 1MB to 1GB"
              },
              {
                "label": "C",
                "meaning": "Substantial. 1GB to 128 GB"
              },
              {
                "label": "D",
                "meaning": "Exceptional. Over 128GB in memory"
              }
            ]
          },
          "relevance": "Whether or not one can resolve a DID directly on a resource-constrained device affects the granularity at which smaller devices can be part of the ecosystem. If small edge devices, such as a smart watch, smart speaker, or even a mobile phone, are incapable of directly resolving a DID of the DID Method, then the method will lead to cloud-based services like blockchain explorer APIs, which themselves become a point of centralization. Many find this option an acceptable engineering trade-off. Others would prefer solutions that allow even the smallest devices to be fully capable of resolving DIDs in an authoritative manner.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-49",
              "method": "did:peer",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-2",
              "note": "Resolution typically requires looking up a file in the file system, which uses minimal RAM."
            },
            {
              "id": "a-50",
              "method": "did:git",
              "net": "B",
              "reg": "varies",
              "evaluationCitation": "#eval-1",
              "note": "Git for Windows is just shy of 50 MB (please update if there are smaller versions available). However, one must still download the entire repo containing the registry material."
            },
            {
              "id": "a-51",
              "method": "did:btcr",
              "net": "D",
              "reg": "D",
              "evaluationCitation": "#eval-1",
              "note": "To definitively resolve, one must operate a full node."
            },
            {
              "id": "a-52",
              "method": "did:sov",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-1",
              "note": "The Sovrin ledger is based on Hyperledger Indy which supports highly efficient state proofs for cryptographic verification of resolution responses. A full node is not required."
            },
            {
              "id": "a-53",
              "method": "did:ethr",
              "net": "B",
              "reg": "B",
              "evaluationCitation": "#eval-1",
              "note": "A full ethereum node takes >100GB, but a light ethereum node can support this method with less than 256kb."
            },
            {
              "id": "a-54",
              "method": "did:jolo",
              "net": "B",
              "reg": "B",
              "evaluationCitation": "#eval-1",
              "note": "A full ethereum node takes >100GB, but a light ethereum node can support this method with less than 256kb."
            }
          ]
        },
        {
          "name": "Limited resource registration",
          "id": "https://www.w3.org/TR/did-rubric#criteria-11",
          "source": ".",
          "version": "1.0.0",
          "question": {
            "question": "What are the minimum resources required to create a trusted DID without relying on intermediaries?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Minimal. Less than 1MB"
              },
              {
                "label": "B",
                "meaning": "Modest. 1MB to 1GB"
              },
              {
                "label": "C",
                "meaning": "Substantial. 1GB to 128 GB"
              },
              {
                "label": "D",
                "meaning": "Exceptional. Over 128GB in memory"
              }
            ]
          },
          "relevance": "Being able to create a DID in constrained situations enables certain types of decentralized applications that otherwise are not possible. On the edge, many devices rely on gateways to manage compute-, memory-, and bandwidth- intensive tasks. For example, while a smart lightbulb might use ZigBee or 6LowPAN, it will typically use a hub to connect to the Internet, even for access from devices within the local IP network. The more resources it takes for small devices to participate in registration, the greater the percentage of those that will need to rely on centralizing factors like hubs and gateways.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-55",
              "method": "did:peer",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-2",
              "note": "Registration may require a few KB of RAM as a DID doc is written to disk."
            },
            {
              "id": "a-56",
              "method": "did:git",
              "net": "B",
              "reg": "varies",
              "evaluationCitation": "#eval-1",
              "note": "Git for Windows is just shy of 50 MB (please update if there are smaller versions available). However, one must still download the entire repo containing the registry material."
            },
            {
              "id": "a-57",
              "method": "did:btcr",
              "net": "A-",
              "reg": "A-",
              "evaluationCitation": "#eval-1",
              "note": "To register a DID, one must simply get a transaction on the ledger, unless you choose to host a continuation DID Document elsewhere, which would require its own resources."
            },
            {
              "id": "a-58",
              "method": "did:sov",
              "net": "A",
              "reg": "A",
              "evaluationCitation": "#eval-1",
              "note": "Registration of a DID is a single transaction that can be performed by a thin client."
            },
            {
              "id": "a-59",
              "method": "did:ethr",
              "net": "A+",
              "reg": "A+",
              "evaluationCitation": "#eval-1",
              "note": "The smart contract used for did:ethr recognizes any valid public key as a DID, without requiring registration. This means DIDs can even be created offline with full usability. Only rotation and the registration of service endpoints require network access."
            },
            {
              "id": "a-60",
              "method": "did:jolo",
              "net": "A+",
              "reg": "A+",
              "evaluationCitation": "#eval-1",
              "note": "The smart contract used for did:ethr recognizes any valid public key as a DID, without requiring registration. Only rotation and the registration of service endpoints require network access."
            }
          ]
        },
        {
          "name": "Transactional Performance - Global Create Bandwidth",
          "question": {
            "question": "How many DIDs of this method can be created per time period, globally?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "More than 1,000,000 Transactions Per Second"
              },
              {
                "label": "B",
                "meaning": "100,001 - 1,000,000 TPS"
              },
              {
                "label": "C",
                "meaning": "10,001 - 100,000 TPS"
              },
              {
                "label": "D",
                "meaning": "1,001 - 10,000 TPS"
              },
              {
                "label": "E",
                "meaning": "101 - 1,000 TPS"
              },
              {
                "label": "F",
                "meaning": "11 - 100 TPS"
              },
              {
                "label": "G",
                "meaning": "1-10 TPS"
              },
              {
                "label": "H",
                "meaning": "Less than 1 TPS"
              }
            ]
          },
          "relevance": "The number of new DIDs that can be created in a second inform the scalability of the network in regards to onboarding new users and allowing for new uses by existing users.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-47",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/13",
          "exampleAssessments": [
            {
              "id": "a-61",
              "method": "did:v1.testnet",
              "net": "n/a",
              "reg": "n/a",
              "note": "Net (n/a) and Reg (n/a): Veres One DID creation is a local cryptographic process. There is no network or registry involved.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-62",
              "method": "did:v1.production",
              "net": "n/a",
              "reg": "n/a",
              "note": "Net (n/a) and Reg (n/a): Veres One DID creation is a local cryptographic process. There is no network or registry involved.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-63",
              "method": "did:web",
              "net": "A",
              "reg": "A",
              "note": "Net (A) and Reg (A): Architecturally, the World Wide Web can easily handle +1,000,000 transactions per second. Thanks to the way domain names can be routed to specific servers in a round-robin fashion, a given domain could, theoretically, reach 1,000,000 TPS. However, we know of no single domain currently engineered to handle that scale.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-64",
              "method": "did:ion",
              "net": "n/a",
              "reg": "n/a",
              "note": "Net (n/a) and Reg (n/a): Creation is offline, so there is effectively no limit.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Transactional Performance -- Global Update Bandwidth",
          "question": {
            "question": "How many DIDs can be updated per second, globally?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "More than 1,000,000 Transactions Per Second"
              },
              {
                "label": "B",
                "meaning": "10,001 - 1,000,000 TPS"
              },
              {
                "label": "C",
                "meaning": "101 - 10,000 TPS"
              },
              {
                "label": "D",
                "meaning": "11 - 100 TPS"
              },
              {
                "label": "E",
                "meaning": "1-10 TPS"
              },
              {
                "label": "F",
                "meaning": "Less than 1 TPS"
              }
            ]
          },
          "relevance": "Along with creation, update performance of the registry can inform as to how many users make use of the Method at any given time.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-48",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/14",
          "exampleAssessments": [
            {
              "id": "a-65",
              "method": "did:v1.testnet",
              "reg": "C",
              "note": "Updates on Veres One have been demonstrated at >100 TPS. This could go considerably higher with various technical trade-offs.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-66",
              "method": "did:v1.production",
              "reg": "C",
              "note": "Updates on Veres One have been demonstrated at >100 TPS. This could go considerably higher with various technical trade-offs.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-67",
              "method": "did:web",
              "reg": "A",
              "note": "DID:web update performance is highly sensitive to both implementation choices (http server, database, etc.) and network latency.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-68",
              "method": "did:ion",
              "reg": "B",
              "note": "Assuming 500 bytes per BTC tx, 1 MB block size, and 1 block per 10 minutes, if ALL transactions in a BTC block contain updates, there could be as many as 35,000 updates per second with did:ion.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Update Latency",
          "question": {
            "question": "How much time does it take for an update to become globally available after submission by the DID controller?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Less than 1 second"
              },
              {
                "label": "B",
                "meaning": "1 to < 60 seconds"
              },
              {
                "label": "C",
                "meaning": "1 to < 10 min"
              },
              {
                "label": "D",
                "meaning": "10 min to < 1 hour"
              },
              {
                "label": "E",
                "meaning": "1 hour to < 1 day"
              },
              {
                "label": "F",
                "meaning": "1 day to 2 weeks"
              },
              {
                "label": "G",
                "meaning": "Greater than two weeks"
              },
              {
                "label": "H",
                "meaning": "Updates not guaranteed"
              }
            ]
          },
          "relevance": "Different registry mechanisms have different guarantees for some notion of finality. The longer one has to wait for confirmation, the greater the latency for high security transactions. The shorter the duration, the more one has to critically validate the race conditions that may be present in determining finality. Depending on the algorithm, there are likely trade-offs between the stability of consensus and the speed at which consensus is pursued.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-49",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/15",
          "exampleAssessments": [
            {
              "id": "a-69",
              "method": "did:v1.testnet",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B):Provable Finality for Veres One updates ranged from 1 to 60 seconds in testing (1-3 seconds in a single data center)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-70",
              "method": "did:v1.production",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B):Provable Finality for Veres One updates ranged from 1 to 60 seconds in testing (1-3 seconds in a single data center)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-71",
              "method": "did:web",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B): Depends on your network (and network configuration), but generally, did:web document updates are as fast as updates to any web resource.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-72",
              "method": "did:ion",
              "net": "D/H",
              "reg": "D/H",
              "note": "Net and Reg:Updates to did:ion DIDs are ultimately anchored on BTC, which averages one block per every ten minutes. Some nodes may batch the BTC anchor operation, which could add to the delay, but this is not a requirement of the method. (D and D)\nSimilarly, due to the dynamically adjusting market for bitcoin transactions, it is possible for a controller to submit a transaction to the ION node and for it to go un-anchored because the ION node is not configured with a competitively priced bitcoin transaction fee. (H and H)",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Operational Reliability",
          "question": {
            "question": "For each layer, how many operational components may be offline without that layer losing availability?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Response",
                "type": "enhancedLetter",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/16",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Equation based on the consensus algorithm"
              },
              {
                "label": "B",
                "meaning": "Known number"
              },
              {
                "label": "C",
                "meaning": "Percentage"
              },
              {
                "label": "D",
                "meaning": "NONE (specific components MUST be operational)"
              },
              {
                "label": "E",
                "meaning": "OPTIONAL (operations do not depend on the layer being available)"
              }
            ]
          },
          "relevance": "Along with the type of consensus algorithm the number of offline nodes has both security--i.e. DDOS attacks--and reliability implications.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-50",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-73",
              "method": "did:v1.testnet",
              "layer": "Witnesses",
              "response": "4",
              "note": "The BFT consensus algorithm used by Veres One requires a supermajority of 9/13 witness nodes to formulate consensus.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-74",
              "method": "did:v1.testnet",
              "layer": "Peers",
              "response": "N/A",
              "note": "Peer nodes are not needed in the formulation of consensus.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-75",
              "method": "did:v1.production",
              "layer": "Witnesses",
              "response": "4",
              "note": "The BFT consensus algorithm used by Veres One requires a supermajority of 9/13 witness nodes to formulate consensus.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-76",
              "method": "did:v1.production",
              "layer": "Peers",
              "response": "N/A",
              "note": "Peer nodes are not needed in the formulation of consensus.",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Operational Security",
          "question": {
            "question": "How many operational components may be compromised without compromising the network?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Response",
                "type": "enhancedLetter",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/17",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Equation based on the consensus algorithm"
              },
              {
                "label": "B",
                "meaning": "Known number"
              },
              {
                "label": "C",
                "meaning": "Percentage"
              },
              {
                "label": "D",
                "meaning": "Unknown"
              },
              {
                "label": "E",
                "meaning": "N/A -- If the algorithm isn’t dependent on the particular layer"
              }
            ]
          },
          "relevance": "Informs how easy it may be to orchestrate a take over of the network and get false transactions accepted by the consensus mechanism.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-51",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-77",
              "method": "did:v1.testnet",
              "layer": "Witnesses",
              "response": "4",
              "note": "Since a supermajority of 9/13 witness nodes is needed for consensus to be reached, compromising more than 4 of these nodes means an attacker could halt consensus formulation.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-78",
              "method": "did:v1.testnet",
              "layer": "Peers",
              "response": "N/A",
              "note": "Peers being compromised does not lead to network failure.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-79",
              "method": "did:v1.production",
              "layer": "Witnesses",
              "response": "4",
              "note": "Since a supermajority of 9/13 witness nodes is needed for consensus to be reached, compromising more than 4 of these nodes means an attacker could halt consensus formulation.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-80",
              "method": "did:v1.production",
              "layer": "Peers",
              "response": "N/A",
              "note": "Peers being compromised does not lead to network failure.",
              "evaluationCitation": "#eval-3"
            }
          ]
        }
      ]
    },
    {
      "name": "Enforcement",
      "description": "Criteria in this section deal with the design rules that enable maintaining the integrity of the verifiable data registry (VDR) and the means of applying those rules. Enforcement is the proper execution of the process of ensuring compliance with laws, regulations, rules, standards, and social norms. This includes how the rule of law is applied to entities involved in governance and operation of the method.",
      "criteria": [
        {
          "name": "Auditability",
          "id": "https://www.w3.org/TR/did-rubric#criteria-12",
          "source": ".",
          "question": {
            "question": "Who can retrieve cryptographic proof of the history of changes to a given DID Document?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Anyone"
              },
              {
                "label": "B",
                "meaning": "Only a select group, including parties not involved in a given DID transaction"
              },
              {
                "label": "C",
                "meaning": "Only parties to the transaction"
              },
              {
                "label": "D",
                "meaning": "Not available"
              }
            ]
          },
          "relevance": "Trustlessness is a prerequisite of a decentralized system. If you have to trust the source of a DID Document (i.e., if you can’t verify cryptographically a DID Document that is returned from resolution), then you are at the mercy of a potentially centralized authority. If, instead, you have a cryptographic audit trail, then the current state of a DID cannot be compromised by an intermediary or central party.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "1.0.1",
          "exampleAssessments": [
            {
              "id": "a-81",
              "method": "did:btcr",
              "reg": "A",
              "evaluationCitation": "#eval-1",
              "note": "Anyone can see everything."
            },
            {
              "id": "a-82",
              "method": "did:git",
              "reg": "B-",
              "evaluationCitation": "#eval-1",
              "note": "If you have access to the authoritative git repo, you can see the cryptographic journal. However, within the method specification, there is no way to know if the repo you are inspecting is, in fact, definitive."
            },
            {
              "id": "a-83",
              "method": "did:web",
              "reg": "D",
              "note": "The web server hosting the DID Document has no requirement to preserve cryptographic history.",
              "evaluationCitation": "#eval-4"
            }
          ]
        },
        {
          "name": "Governance Jurisdiction",
          "question": {
            "question": "In which jurisdiction is the governing body located?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/18",
          "relevance": "Different jurisdictions have different laws which may affect the operation of the method.",
          "response": {},
          "id": "https://www.w3.org/TR/did-rubric#criteria-52",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-84",
              "method": "did:v1.testnet",
              "decision making body": "Digital Bazaar, Inc.",
              "note": "Digital Bazaar created Veres One. It is a corporation formed in the commonwealth of Virginia, USA.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-85",
              "method": "did:v1.production",
              "decision making body": "Veres One Community Group",
              "note": "In production, the Veres One Community Group is the public-facing decision making body designed for discussing technical matters. It operates under the auspices of the World Wide Web Consortium. The W3C does not have a single physical headquarters. There are four institutions that \"host\" W3C: MIT (in Cambridge, MA, USA), ERCIM (in Sophia-Antipolis, France), Keio University (near Tokyo, Japan), and Beihang University (in Beijing, China).",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-86",
              "method": "did:v1.production",
              "decision making body": "Veres Foundation Board",
              "note": "The Veres Foundation holds responsibility for the financial and legal decisions necessary to keep the network operational. It is based in Ottawa, Canada.",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Operational Diversity",
          "question": {
            "question": "How many independent legal entities currently maintain the operational integrity of the Verifiable Data Registries?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Open ended, unknown, or unknowable."
              },
              {
                "label": "B",
                "meaning": "Capped. [State lower and upper bounds in Notes]"
              },
              {
                "label": "C",
                "meaning": "One"
              },
              {
                "label": "D",
                "meaning": "Zero"
              }
            ]
          },
          "relevance": "Singular--or small numbers of--entities controlling the consensus of a network can orchestrate malicious attacks.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-53",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/19",
          "exampleAssessments": [
            {
              "id": "a-87",
              "method": "did:v1.testnet",
              "reg": "B [13]",
              "note": "Veres One is designed for 13 Witnesses; only Witnesses are able to approve updates to the chain. The propagation rules of the peer network restrict the ability for Witnesses to selectively approve transactions, but ultimately, the decision remains with a supermajority of nine Witnesses.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-88",
              "method": "did:v1.production",
              "reg": "B [13]",
              "note": "Veres One is designed for 13 Witnesses; only Witnesses are able to approve updates to the chain. The propagation rules of the peer network restrict the ability for Witnesses to selectively approve transactions, but ultimately, the decision remains with a supermajority of nine Witnesses.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-89",
              "method": "did:web",
              "reg": "C",
              "note": "Any of the layers could be compromised by that particular party.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-90",
              "method": "did:ion",
              "reg": "A",
              "note": "Bitcoin and IPFS allow any number of legal entities to participate in consensus.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Registry Consensus",
          "question": {
            "question": "What type of integrity mechanism is used by the method’s Verifiable Data Registry?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Proof of Work"
              },
              {
                "label": "B",
                "meaning": "Proof of Stake"
              },
              {
                "label": "C",
                "meaning": "BFT algorithm based"
              },
              {
                "label": "D",
                "meaning": "Electoral ‒ Select parties vote with thresholds"
              },
              {
                "label": "E",
                "meaning": "Unanimous ‒ All parties countersign"
              },
              {
                "label": "F",
                "meaning": "Unilateral ‒ Latest signed version defined as authentic"
              },
              {
                "label": "G",
                "meaning": "Standards-based specifications determined by institutional authority, used by anyone"
              },
              {
                "label": "H",
                "meaning": "Other ‒ Add your own"
              }
            ]
          },
          "relevance": "The consensus mechanism used by the method registry has implications for scalability, speed of operations, security and possibly environmental impact.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-54",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/20",
          "exampleAssessments": [
            {
              "id": "a-91",
              "method": "did:v1.testnet",
              "reg": "C",
              "note": "There Veres One registry consensus algorithm uses a BFT algorithm which formulates consensus through a super majority of witness nodes with any number of peer nodes allowed to participate in the gossip network.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-92",
              "method": "did:v1.production",
              "reg": "C",
              "note": "There Veres One registry consensus algorithm uses a BFT algorithm which formulates consensus through a super majority of 13 witness nodes with any number of peer nodes allowed to participate in the gossip network.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-93",
              "method": "did:web",
              "reg": "F/G",
              "note": "ICANN sets the specification for consensus (F). DNS works by participants agreeing that ICANN’s rules determine global state.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-94",
              "method": "did:ion",
              "reg": "A",
              "note": "The VDR for did:ion is Bitcoin, which is Proof of Work",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Operational Layers",
          "question": {
            "question": "What layers of operational components establish and maintain integrity of the Verifiable Data Registry?",
            "instruction": "For each layer, evaluate criteria https://www.w3.org/TR/did-rubric#criteria-50, https://www.w3.org/TR/did-rubric#criteria-51, and https://www.w3.org/TR/did-rubric#criteria-56."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "List each layer"
              }
            ]
          },
          "relevance": "The manner in which a Verifiable Data Registry (VDR) manages integrity defines how that integrity might be compromised. To understand how the VDR of a given Method maintains integrity, this criteria identifies the operational components of the VDR for further evaluation in other criteria, namely https://www.w3.org/TR/did-rubric#criteria-50, https://www.w3.org/TR/did-rubric#criteria-51, and https://www.w3.org/TR/did-rubric#criteria-56. Unfortunately, network topology inevitably introduces parties that may be able to disrupt or compromise network interactions. For example, DNS servers--often under the control of the user’s ISP or the corporate IT department--can return “fake” IP addresses; corporate firewalls can prevent traffic to or from certain addresses; corporate system administrators may prevent users from configuring alternative Certificate Authorities, even international internet traffic can be restricted or denied, purely at the network layer.Because nearly every DID method known at this point depends on Internet-based networking, every DID method faces these same problems. As such, we don’t recommend specifying common network components as distinct layers unless those layers have specific roles unique to the particular DID method.For this criteria, we are talking about the operational components that have specific, unique, or privileged roles with regard to the evaluated DID Method(s). The parties which fulfill said roles should be considered when evaluating the fitness of the given method(s).",
          "id": "https://www.w3.org/TR/did-rubric#criteria-55",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/21",
          "exampleAssessments": [
            {
              "id": "a-95",
              "method": "did:v1.testnet",
              "layer": "Witnesses",
              "note": "In the test net the number of peer nodes is limited but the same number of witness nodes are used as in production.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-96",
              "method": "did:v1.testnet",
              "layer": "Peers",
              "note": "",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-97",
              "method": "did:v1.production",
              "layer": "Witnesses",
              "note": "In production the number of peer nodes is expected to increase greatly.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-98",
              "method": "did:v1.production",
              "layer": "Peers",
              "note": "",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Layer Diversity",
          "question": {
            "question": "How many operational components need to be compromised to compromise the verifiable data registry (evaluate for each operational component)?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Response",
                "type": "enhancedLetter",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": "https://didcriteria.com/criteria/22",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Open ended, unknown, or unknowable."
              },
              {
                "label": "B",
                "meaning": "Capped. [State upper and lower bounds in Notes]"
              },
              {
                "label": "C",
                "meaning": "One"
              }
            ]
          },
          "relevance": "Along with the type of consensus algorithm, the number of nodes that can participate in consensus has implications towards network security and reliability.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-56",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-99",
              "method": "did:v1.testnet",
              "layer": "Witnesses",
              "response": "B [4]",
              "note": "Veres One’s consensus requires 9 of 13 Witness nodes to agree, as such if more than 4 were compromised the network may cease to function. (B)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-100",
              "method": "did:v1.testnet",
              "layer": "Peers",
              "response": "A",
              "note": "Peer nodes are not directly involved in maintaining the verifiable data registry and only propagate state. As such compromising any number of Peer nodes does not compromise the network. (A)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-101",
              "method": "did:v1.production",
              "layer": "Witnesses",
              "response": "B [4]",
              "note": "Veres One’s consensus requires 9 of 13 Witness nodes to agree, as such if more than 4 were compromised the network may cease to function. (B)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-102",
              "method": "did:v1.production",
              "layer": "Peers",
              "response": "A",
              "note": "Peer nodes are not directly involved in maintaining the verifiable data registry and only propagate state. As such compromising any number of Peer nodes does not compromise the network. (A)",
              "evaluationCitation": "#eval-3"
            }
          ]
        },
        {
          "name": "Verification Relationships",
          "question": {
            "question": "What verification relationships are supported by the method per specification?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "None"
              },
              {
                "label": "B",
                "meaning": "Authentication"
              },
              {
                "label": "C",
                "meaning": "AssertionMethod"
              },
              {
                "label": "D",
                "meaning": "Key Agreement"
              },
              {
                "label": "E",
                "meaning": "CapabilityInvocation"
              },
              {
                "label": "F",
                "meaning": "CapabilityDelegation"
              },
              {
                "label": "G",
                "meaning": "Other"
              },
              {
                "label": "H",
                "meaning": "Any"
              }
            ]
          },
          "relevance": "The verification relationships a method supports inform the ways in which DIDs of the method can be used. See section 5.3 of the DID-Core specification for details on verification relationships. https://www.w3.org/TR/did-core/#verification-relationships",
          "id": "https://www.w3.org/TR/did-rubric#criteria-57",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/23",
          "exampleAssessments": [
            {
              "id": "a-103",
              "method": "did:v1.testnet",
              "spec": "H",
              "note": "The did.v1 specification does not have any restrictions to the Verification Relationships supported.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-104",
              "method": "did:v1.production",
              "spec": "H",
              "note": "The did.v1 specification does not have any restrictions to the Verification Relationships supported.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-105",
              "method": "did:web",
              "spec": "H",
              "note": "The did:web specification does not restrict Verification Relationships.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-106",
              "method": "did:ion",
              "spec": "B,C,D,E,F",
              "note": "The did:ion specification only enumerates the Verification Relationships as they appear at the time of this assessment in the did-core specification.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Authentication Model",
          "question": {
            "question": "How does the method authenticate a given DID operation as coming from the legitimate DID controller?",
            "instruction": "Include as many as apply to this Method."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Response",
                "type": "multipleChoice",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "None"
              },
              {
                "label": "B",
                "meaning": "Cryptographically signed transactions"
              },
              {
                "label": "C",
                "meaning": "Cryptographic challenge string & signed response"
              },
              {
                "label": "D",
                "meaning": "Authenticator App"
              },
              {
                "label": "E",
                "meaning": "Biometrics"
              },
              {
                "label": "F",
                "meaning": "Email"
              },
              {
                "label": "G",
                "meaning": "DNS Record"
              },
              {
                "label": "H",
                "meaning": "HTML over HTTP"
              },
              {
                "label": "I",
                "meaning": "SMS/MMS"
              },
              {
                "label": "J",
                "meaning": "DID document update"
              },
              {
                "label": "K",
                "meaning": "Other"
              },
              {
                "label": "L",
                "meaning": "Any"
              }
            ]
          },
          "relevance": "The way in which DID updates are authenticated can have implications on not only the trustworthiness of the method but also informs someone who wants to use the method what they may need to implement technologically to properly make use of the method.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-58",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/24",
          "exampleAssessments": [
            {
              "id": "a-64",
              "method": "did:ion",
              "response": "B",
              "note": "ION uses JWK and JWS to ensure that DID operations are properly authorized.",
              "evaluationCitation": "#eval-5"
            }
          ]
        }
      ]
    },
    {
      "name": "Adoption (and diversity)",
      "description": "Adoption criteria address how widely the method and its implementations are used by various parties and systems.",
      "criteria": [
        {
          "name": "Financial Entanglements",
          "question": {
            "question": "How was the Method funded?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "State-sponsored funding"
              },
              {
                "label": "B",
                "meaning": "Regulated not-for-profit entity"
              },
              {
                "label": "C",
                "meaning": "Private equity"
              },
              {
                "label": "D",
                "meaning": "Operational budget"
              },
              {
                "label": "E",
                "meaning": "Cryptocurrency"
              },
              {
                "label": "F",
                "meaning": "Tokenized Initial Coin Offering"
              },
              {
                "label": "G",
                "meaning": "Initial Public Offering (public equity funding)"
              },
              {
                "label": "H",
                "meaning": "Other -- State what in the notes"
              }
            ]
          },
          "relevance": "Funding can create financial entanglements. Those methods that depend on outside financing should be further evaluated to understand the potential consequences of funding to-date.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-59",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/25",
          "exampleAssessments": [
            {
              "id": "a-107",
              "method": "did:v1.testnet",
              "spec": "D",
              "net": "D",
              "reg": "D",
              "note": "Spec (D), Net (D), and Reg (D): did:v1 was funded by Digital Bazaar through internal operational budgets",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-108",
              "method": "did:v1.production",
              "spec": "D",
              "net": "D",
              "reg": "D",
              "note": "Spec (D), Net (D), and Reg (D): did:v1 was funded by Digital Bazaar through internal operational budgets",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-109",
              "method": "did:web",
              "spec": "D",
              "net": "A/B/C/D/G",
              "reg": "H",
              "note": "Spec (D): Specification was developed largely by independent firms using operational budgets .\nNet: The web was funded initially by the US Department of Defense and national TLD Administrators are funded by nation-states (A). Network infrastructure of TLD Administrators, hosting services, etc., have largely been funded by non-profits (B), private firms using either private equity (C), operational budgets (D), or public equity offerings (G).\nReg (H): Individual websites and network services have been funded in just about every way imaginable.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-110",
              "method": "did:ion",
              "spec": "D",
              "net": "E/C/D",
              "reg": "E/C/D",
              "note": "Spec (D): Specification was developed largely by independent firms using operational budgets\nNet and Reg: Bitcoin is a self-funding cryptocurrency (E), IPFS was developed by Protocol Labs, using some combination of private equity and operating budget (C/D).",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Organizational Maturity in Time",
          "question": {
            "question": "How long has the organization(s) behind the Method been operational?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Over 20 years"
              },
              {
                "label": "B",
                "meaning": "Over 10 years"
              },
              {
                "label": "C",
                "meaning": "Over 5 years"
              },
              {
                "label": "D",
                "meaning": "Over 1 year"
              },
              {
                "label": "E",
                "meaning": "Less than 1 year"
              },
              {
                "label": "F",
                "meaning": "There is no organization per se"
              }
            ]
          },
          "relevance": "The age of the organization(s) behind a Method can be used to give an idea into organizational maturity. It is not a sole indicator and should be taken as a data point in evaluating the Method organization’s current state.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-60",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/26",
          "exampleAssessments": [
            {
              "id": "a-111",
              "method": "did:v1.testnet",
              "spec": "B",
              "net": "D",
              "reg": "D",
              "note": "Spec: Digital Bazaar, the team behind the spec has been in business for over 17 years. (B)\nNet (D) and Reg (D): The Veres One Foundation was founded in 2019.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-112",
              "method": "did:v1.production",
              "spec": "B",
              "net": "D",
              "reg": "D",
              "note": "Spec: Digital Bazaar, the team behind the spec has been in business for over 17 years. (B)\nNet (D) and Reg (D): The Veres One Foundation was founded in 2019.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-113",
              "method": "did:web",
              "spec": "F",
              "net": "A",
              "reg": "*",
              "note": "Spec (F): did:web specification development began in earnest in 2019 by a variety of interested parties.\nNet (A): The Internet and the World Wide Web have been around for over 20 years.\nReg (*): The individual web servers that might be used depend on the organizational maturity of the hosting company and the website operator.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-114",
              "method": "did:ion",
              "spec": "A/D",
              "net": "C",
              "reg": "C",
              "note": "Spec: The major organizations behind the did:ion specification are DIF (D) and Microsoft (A). DIF is also the organization driving the Sidetree specification, which did:ion is based on.\nNet (C) and Reg (C): Are based on bitcoin and IPFS\nMicrosoft has existed for more than 20 years. DIF and Protocol Labs (the organization behind IPFS) are younger, but each have existed for at least five years. Bitcoin started in 2009, but really has no formal organization.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Release Status",
          "question": {
            "question": "Can the method be used for production today?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Yes. A production system is available to the general population."
              },
              {
                "label": "B",
                "meaning": "No. A test network is operational."
              },
              {
                "label": "C",
                "meaning": "No. Only an internal developer network is operational."
              },
              {
                "label": "D",
                "meaning": "No. The software is not yet running on any network."
              }
            ]
          },
          "relevance": "Some errors only become apparent after sufficient time to test edge cases and performance boundaries.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-61",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/27",
          "exampleAssessments": [
            {
              "id": "a-115",
              "method": "did:v1.testnet",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B): The Veres One test network has been operational for over 3 years, in three major release iterations. It is not yet in production.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-116",
              "method": "did:v1.production",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B): The Veres One test network has been operational for over 3 years, in three major release iterations. It is not yet in production.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-117",
              "method": "did:web",
              "net": "A",
              "reg": "A",
              "note": "Net (A) and Reg (A): The web has been in general use for 30+ years. Multiple production deployments are in use today.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-118",
              "method": "did:ion",
              "net": "A",
              "reg": "A",
              "note": "Net (A) and Reg (A): All major components are in production and available to the public.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Maturity",
          "question": {
            "question": "How long has the underlying network/registry been available to third parties for non-trivial use?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The network/registry has been operationalized for ten years or more."
              },
              {
                "label": "B",
                "meaning": "The network/registry has been operationalized for five years or more"
              },
              {
                "label": "C",
                "meaning": "The network/registry has been operationalized for one year or more"
              },
              {
                "label": "D",
                "meaning": "The network/registry has been operationalized for less than one year"
              },
              {
                "label": "E",
                "meaning": "The network/registry is not operationalized for non-trivial use"
              }
            ]
          },
          "relevance": "Some errors only become apparent after sufficient time to test edge cases and performance boundaries.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-62",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/28",
          "exampleAssessments": [
            {
              "id": "a-119",
              "method": "did:v1.testnet",
              "net": "C",
              "reg": "C",
              "note": "Net (C) and Reg (C): The Veres One test network has been operational for over 3 years in three major release iterations.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-120",
              "method": "did:v1.production",
              "net": "E",
              "reg": "E",
              "note": "Net (E) and Reg (E): The Veres One production network has not yet been released.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-121",
              "method": "did:web",
              "net": "A",
              "reg": "D",
              "note": "Net (A): The web has been around since 1991.\nReg (D): We know of no websites that have operationalized did:web earlier than July 2021.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-122",
              "method": "did:ion",
              "net": "D/A/B",
              "reg": "D/A/B",
              "note": "Net and Reg: did:ion entered production on Jan 22, 2021 (less than one year at the point of this Evaluation) (D). Bitcoin has been in operation since 2009 (A) and IPFS since 2015 (B).",
              "evaluationCitation": "#eval-5"
            }
          ]
        }
      ]
    },
    {
      "name": "Security",
      "description": "Security criteria address how the method is cryptographically secured.",
      "criteria": [
        {
          "name": "Robust Crypto",
          "id": "https://www.w3.org/TR/did-rubric#criteria-24",
          "source": ".",
          "question": {
            "question": "What is the lowest security level (“bits of security”) allowed in the processes that ensure integrity of the verifiable data registry?",
            "instruction": "Evaluate the security level according to https://en.wikipedia.org/wiki/Security_level"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "No combination of required features produces a profile with less than 256 bits of security."
              },
              {
                "label": "B",
                "meaning": "Between 128 and 256 bits. (Conventional wisdom — NIST recommendation — says that this level of security is adequate until the next revolutionary breakthrough.)"
              },
              {
                "label": "C",
                "meaning": "Less than 128 bits. (NIST recommends replacing this security by 2030.)"
              },
              {
                "label": "D",
                "meaning": "Less than 112 bits. (Security is obsolete today.)"
              }
            ],
            "possibleResponses[1]": {
              "meaning": "Between 128 and 256 bits"
            },
            "possibleResponses[2]": {
              "meaning": "Less than 128 bits"
            },
            "possibleResponses[3]": {
              "meaning": "Less than 64 bits"
            }
          },
          "relevance": "A DID method that requires implementations to support something weak (e.g., 1024-bit RSA) is guaranteeing that its users will cooperate by default with encryption that's relatively easy to crack, with hashing that's not adequately collision-resistant, etc.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "2.0.0",
          "exampleAssessments": [
            {
              "id": "a-74",
              "method": "did:web",
              "reg": "C",
              "evaluationCitation": "#eval-2",
              "note": "Although the DNS subsystem that supports did:web does not provide strong security, control of a DID is proved by accessing /.well-known over TLS. Thus, the security is tied to certificate config. Most web server certificates use 2048- bit RSA, which gives 112 bits of security."
            },
            {
              "id": "a-75",
              "method": "did:indy",
              "reg": "B",
              "evaluationCitation": "#eval-2",
              "note": "Hashes are SHA2-256. Keys are Ed25519/Curve25519 (128 bits of security). Reads and writes to the Indy ledger use CurveZMQ rather than TLS. This gives 128 bits of security in the aggregate."
            },
            {
              "id": "a-251",
              "method": "did:ion",
              "reg": "B-",
              "note": "Secp256k1 theoretically guarantees 128 bit security. However, some theoretical attacks have shown a reduction of approximately 5 bits. (B-)",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Availability",
          "id": "https://www.w3.org/TR/did-rubric#criteria-28",
          "source": ".",
          "question": {
            "question": "How robust are protections against attempts to suppress information flow, whether legal (cease and desist) or technical (denial of service)?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The VDR is practically immune from this risk."
              },
              {
                "label": "B",
                "meaning": "The VDR has reasonable protections in place. However, motivated and well resourced attackers could temporarily disrupt access in a targeted context."
              },
              {
                "label": "C",
                "meaning": "Attackers could permanently disrupt access in a targeted context."
              }
            ]
          },
          "relevance": "Control over an identifier is far less valuable if the propagation of that control can be limited by someone else.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "version": "2.0.0",
          "exampleAssessments": [
            {
              "id": "a-84",
              "method": "did:btcr",
              "reg": "A",
              "evaluationCitation": "#eval-2",
              "note": "The global bitcoin network has a strong track record of uptime , stretching back for well over a decade, even in the face of motivated attack."
            },
            {
              "id": "a-261",
              "method": "did:v1.production",
              "reg": "B",
              "note": "Veres One is operated by known parties; if all such parties are attacked, especially via legal means, the network could be shut down or additional rules applied. However, no single party can deny the consensus process. Like any publicly accessible service, Veres One is subject to distributed denial of service attacks. Counter measures are in place, but cannot be 100% ameliorated. (B)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-262",
              "method": "did:web",
              "reg": "C",
              "note": "There are a number of attack vectors for each layer in the system; however, each layer also has its own mechanisms for addressing disruption. (C)",
              "evaluationCitation": "#eval-4"
            }
          ]
        },
        {
          "name": "Many Eyes",
          "id": "https://www.w3.org/TR/did-rubric#criteria-30",
          "source": ".",
          "version": "1.0.0",
          "question": {
            "question": "Is the code of the method published, does it have many contributors, and does it have a published vulnerability reporting (responsible disclosure) mechanism?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The code is public. It has hundreds of contributors. CVEs or similar reports have been published and handled appropriately."
              },
              {
                "label": "B",
                "meaning": "The code is public, but the list of contributors is small. No vulnerability reporting mechanism has been announced, or it's been announced but has no demonstrable track record."
              },
              {
                "label": "C",
                "meaning": "The code is partly private."
              },
              {
                "label": "D",
                "meaning": "The code is entirely private."
              }
            ]
          },
          "relevance": "Security vulnerabilities tend to be found and fixed best in code that has many active contributions and a strong history of correctly handled responsible disclosure.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Score",
                "type": "enhancedLetter",
                "propertyRef": "score"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-123",
              "method": "did:sov",
              "score": "A",
              "evaluationCitation": "#eval-2",
              "note": "The most prominent codebases that implement this method, github.com/hyperledger/indy-* have over 1000 forks, about 200 unique contributors from over a dozen organizations, spanning 5 years and about 25000 commits as of 2021. Sovrin's Technical Governance Board, which vets some aspects of the design, is composed of numerous independent experts, and meets regularly. Both Hyperledger and Sovrin Foundation have responsible disclosure mechanisms for vulnerabilities, and both have successfully handled vulnerabilities from initial report to patch and public disclosure."
            },
            {
              "id": "a-124",
              "method": "did:peer",
              "score": "B",
              "evaluationCitation": "#eval-2",
              "note": "The spec and implementations of code are entirely public, with incubation through DIF's identifiers WG. However, contributors are limited to a dozen developers, activity is light, and there is no announced vulnerability mechanism."
            }
          ]
        },
        {
          "name": "Diffuse Control",
          "id": "https://www.w3.org/TR/did-rubric#criteria-31",
          "source": ".",
          "version": "1.0.0",
          "question": {
            "question": "To what extent does the system support mechanisms where DID control is distributed across multiple parties (m-of-n control, threshold signatures, etc.)?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Rich diffuse control mechanisms are a first-class feature, and anyone who resolves a DID can see whether they are in use so confidence is increased. This may include device revocation (where keys must be exercised on a particular device to be valid)."
              },
              {
                "label": "B",
                "meaning": "Some diffuse control is possible but has important deficits in documentation, maturity, or visibility."
              },
              {
                "label": "C",
                "meaning": "Multiple parties can exercise control independently. Diffuse control is possible outside the system (e.g., using Shamir secret sharing to reconstitute a single key before updating a DID document). It's not possible to know whether such mechanisms are in use."
              },
              {
                "label": "D",
                "meaning": "Only a single party can exercise control at a time."
              }
            ]
          },
          "relevance": "Diffuse trust makes hacking harder and recovery more robust (but maybe more complex).",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Score",
                "type": "enhancedLetter",
                "propertyRef": "score"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-125",
              "method": "did:key",
              "score": "C",
              "evaluationCitation": "#eval-2",
              "note": "did:key is controlled by a single key. If aggregate control is desired, these keys can be sharded, but that is outside the method's feature set."
            },
            {
              "id": "a-126",
              "method": "did:peer",
              "score": "A",
              "evaluationCitation": "#eval-2",
              "note": "Dynamic peer DIDs explicitly define an m-of-n scheme that can be used to authorize any evolution of state, or any verification method supported by the DID."
            }
          ]
        },
        {
          "name": "Expert Review (Cryptography)",
          "question": {
            "question": "Does the system use cryptographic and security primitives that are well vetted by technical experts, and battle hardened in the school of experience?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": ".",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Experts generally consider the system very secure, and this opinion is reinforced by a track record of secure production use."
              },
              {
                "label": "B",
                "meaning": "The theoretical security of the system looks excellent, and no known attacks or substantive criticisms are unaddressed. However, limited review or limited experience informs the opinion."
              },
              {
                "label": "C",
                "meaning": "Credible reports of vulnerabilities or design shortcomings have not been addressed."
              },
              {
                "label": "D",
                "meaning": "The system actively uses mechanisms that are officially deprecated."
              },
              {
                "label": "E",
                "meaning": "The system uses mechanisms that have not been vetted."
              }
            ]
          },
          "relevance": "Exotic crypto and other security mechanisms without expert review and a production track record is likely to contain hidden risks.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-25",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-127",
              "method": "did:v1.testnet",
              "reg": "A",
              "note": "Ed25519 and SHA256 are highly regarded cryptographic algorithms and are the only cryptographic primitives used in Veres One. (A)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-128",
              "method": "did:v1.production",
              "reg": "A",
              "note": "Ed25519 and SHA256 are highly regarded cryptographic algorithms and are the only cryptographic primitives used in Veres One. (A)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-129",
              "method": "did:web",
              "reg": "A/E",
              "note": "TLS/SSL (a requirement for did:web) is the most widespread adoption of cryptographic technology with well-tested, proven implementations (A). The method itself does not require any additional cryptographic primitives. The did:web method does inherit the known short-comings of DNS, which can be mitigated with DNSSec, in some cases. However, this is not a cryptographic problem. In addition, each webserver is free to use any authentication and authorization technique for creating, updating, and deactivating a DID and DID Document. The method relies on this layer to function, but the implementation of this layer may or may not use vetted cryptography (E).",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-130",
              "method": "did:ion",
              "reg": "A",
              "note": "Bitcoin’s security has proven robust. (A)",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Expert Review (Consensus)",
          "question": {
            "question": "If the method makes use of a distributed consensus mechanism, has the registry’s consensus mechanism undergone sufficient review?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Yes. A formal proof has been published in a peer reviewed journal"
              },
              {
                "label": "B",
                "meaning": "Yes. A formal proof has been published"
              },
              {
                "label": "C",
                "meaning": "No. An informal argument has been published"
              },
              {
                "label": "D",
                "meaning": "No. The consensus algorithm is opaque to registry users."
              }
            ]
          },
          "relevance": "Decentralized systems are notoriously difficult to get right. Consensus ordering, in particular, is known to be a hard problem solved by distributed ledgers. Even simpler registries may trade off provable finality with probabilistic finality. It is vital that the Method used for high-value or life-critical application be rigorously evaluated for potential flaws.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-63",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/29",
          "exampleAssessments": [
            {
              "id": "a-131",
              "method": "did:v1.testnet",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B): Mathematical proofs have been peer reviewed for publication in a not-yet-published book on consensus algorithms and as a special IEEE journal publication on network consensus algorithms.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-132",
              "method": "did:v1.production",
              "net": "B",
              "reg": "B",
              "note": "Net (B) and Reg (B): Mathematical proofs have been peer reviewed for publication in a not-yet-published book on consensus algorithms and as a special IEEE journal publication on network consensus algorithms.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-133",
              "method": "did:web",
              "net": "A",
              "reg": "n/a",
              "note": "Net (A): The DNS and TLS systems have been thoroughly reviewed in academic literature in research about the Internet and the World Wide Web.\nReg (n/a) : The method provides no consensus mechanism with regard to the https server itself. The entity controlling the server operates independently. (n/a)",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-134",
              "method": "did:ion",
              "net": "A",
              "reg": "A",
              "note": "Net (A) and Reg (A): Bitcoin’s proof of work consensus algorithm has been thoroughly reviewed. IPFS uses a Kademlia hash table algorithm, which has also undergone thorough academic review since publication in 2002. However, compromising the hash table would not compromise the content of a DID Document; rather it would affect the ability to resolve the DID to that DID Document. IPFS’s content-hash addressing is based on multihash, and did:ion requires using the SHA-256 variant of multihash. SHA-256 is extremely well reviewed.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "Provenance",
          "question": {
            "question": "Is the current state of a DID document provably correct from a history that's visible to anyone who can resolve the DID?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": ".",
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The update history of the DID document is recorded, accessible, and linked appropriately to its predecessor. Arbitrary versions can be queried and proved correct, and they have a reasonably useful timestamp."
              },
              {
                "label": "B",
                "meaning": "The update history of the DID document exists, and a forensic analysis could prove correctness. However, it's not exposed for consumption of ordinary resolvers, it lacks supporting metadata, or it's exposed in a very suboptimal way."
              },
              {
                "label": "C",
                "meaning": "Limited evidence of proper DID document updates exists."
              },
              {
                "label": "D",
                "meaning": "No evidence of proper DID document updates exist; the user has to trust the system's assertion that the current state resulted from something appropriate."
              }
            ]
          },
          "relevance": "It's possible to tamper with systems that don't actively prove the correctness of their current state. Such tampering is not easy to discover.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-29",
          "version": "1.0.0",
          "exampleAssessments": [
            {
              "id": "a-135",
              "method": "did:v1.testnet",
              "reg": "A",
              "note": "All document updates are recorded in a non-repudiable manner on the Veres One Ledger.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-136",
              "method": "did:v1.production",
              "reg": "A",
              "note": "All document updates are recorded in a non-repudiable manner on the Veres One Ledger.",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-137",
              "method": "did:web",
              "reg": "D",
              "note": "The method does not require the website serving the DID Document to demonstrate any form of provenance.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-138",
              "method": "did:ion",
              "reg": "B",
              "note": "As long as the IPFS-based transaction bundles are available (either via IPFS or somewhere else), the provenance of each DID Document is independently validatable. Similarly, if bitcoin state is lost, it would be impossible to verify the provenance of did:ion DID Documents. In both cases, it is relatively straightforward to address this by retaining your own copy of the state information, e.g., running your own bitcoin node and hosting the did:ion transaction bundles on your own IPFS node. In addition, late publishing https://identity.foundation/sidetree/spec/#late-publishing could allow multiple versions of DID Documents to be simultaneously seen as canonical.",
              "evaluationCitation": "#eval-5"
            }
          ]
        },
        {
          "name": "United States Federal Compliance",
          "question": {
            "question": "Is the Method compliant with US Federal requirements for the use of cryptography?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Both registry consensus *and* transaction validation are compliant"
              },
              {
                "label": "B",
                "meaning": "Transaction validation is compliant but consensus is not"
              },
              {
                "label": "C",
                "meaning": "No. Neither consensus nor transactions are compliant"
              }
            ]
          },
          "relevance": "Many US Federal programs and projects require use of cryptography according to standards set by the National Institute of Standards and Technology (NIST), such as:FIPS 186-5 (https://csrc.nist.gov/publications/detail/fips/186/5/draft)NIST 800-131Ar2 (https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final)SP 800-186 (https://csrc.nist.gov/publications/detail/sp/800-186/draft)NIST FIPS 186-4 https://csrc.nist.gov/publications/detail/fips/186/4/final)NIST 800-38D (https://csrc.nist.gov/publications/detail/sp/800-38d/final)NIST 800-38F (https://csrc.nist.gov/publications/detail/sp/800-38f/final)FIPS 180-4 (https://csrc.nist.gov/publications/detail/fips/180/4/final)FIPS 800-107r1. (https://csrc.nist.gov/publications/detail/sp/800-107/rev-1/final)",
          "id": "https://www.w3.org/TR/did-rubric#criteria-64",
          "version": "1.0.0",
          "source": "https://didcriteria.com/criteria/30",
          "exampleAssessments": [
            {
              "id": "a-139",
              "method": "did:v1.testnet",
              "spec": "A",
              "net": "A",
              "reg": "A",
              "note": "Spec (A), Net (A), and Reg (A): did:v1 was written to be compatible with all NIST requirements, including those specified in the Relevance section (6.8.3)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-140",
              "method": "did:v1.production",
              "spec": "A",
              "net": "A",
              "reg": "A",
              "note": "Spec (A), Net (A), and Reg (A): did:v1 was written to be compatible with all NIST requirements, including those specified in the Relevance section (6.8.3)",
              "evaluationCitation": "#eval-3"
            },
            {
              "id": "a-141",
              "method": "did:web",
              "spec": "A",
              "net": "A",
              "reg": "A",
              "note": "Spec (A), Net (A), and Reg (A): Due to the flexibility of the underlying web architecture, any layer *might* be non-compliant; However, the web is a mature platform with many years of solutions that do, in fact, meet US federal requirements.",
              "evaluationCitation": "#eval-4"
            },
            {
              "id": "a-142",
              "method": "did:ion",
              "spec": "B",
              "net": "B",
              "reg": "B",
              "note": "Spec (B), Net (B), and Reg (B): Bitcoin is likely not NIST compliant thanks to the adoption of Schnorr signatures (with the taproot extension), which are not yet NIST approved. However, recent signals from NIST suggest that (1) bitcoin use of cryptography is not prima facie out of compliance and (2) NIST’s previous evaluations of Schnorr hinged on patent concerns; now that those patents are expired, many are optimistic that Schnoor will be given serious consideration in future evaluations. IPFS allows non-approved hash algorithms through multihash, however did:ion adds the requirement that all hashes be SHA-256, which is NIST compliant.",
              "evaluationCitation": "#eval-5"
            }
          ]
        }
      ]
    },
    {
      "name": "Privacy",
      "description": "Addresses the ability of a DID method to ensure various privacy mechanisms. When DIDs are used as identifiers for people, it becomes important to consider what tools a DID method offers to operate at different levels of privacy. Use cases that focus on IoT or institutions may not feel that this dimension is especially important (though institutional privacy may sometimes be desirable).",
      "criteria": [
        {
          "name": "Per-DID constraints on visibility",
          "id": "https://www.w3.org/TR/did-rubric#criteria-33",
          "source": ".",
          "version": "1.0.0",
          "question": {
            "question": "What provisions are made for restricting visibility of DIDs to audiences other than the general public?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Fully private is possible."
              },
              {
                "label": "B",
                "meaning": "VDR is visible to \"all\", but \"all\" is a restricted audience with enforced terms of service or other disincentives to abuse."
              },
              {
                "label": "C",
                "meaning": "VDR is fully public with no constraints."
              }
            ]
          },
          "relevance": "Restricting the audience for a DID is a way to discourage crawling and secondary, possibly abusive publication. However, no mechanism can completely prevent this; creating disincentives, accountability, and/or costs that encourage the DID owner's wishes to be respected is the best we can hope for.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Score",
                "type": "enhancedLetter",
                "propertyRef": "score"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-143",
              "method": "did:twit",
              "score": "C",
              "evaluationCitation": "#eval-2",
              "note": "A did:tweet is created and updated by posting to a public twitter feed; it is always completely public."
            },
            {
              "id": "a-144",
              "method": "did:key",
              "score": "A",
              "evaluationCitation": "#eval-2",
              "note": "Nothing about the did:key method requires it to be published anywhere. It is as private or as public as the mechanism used to share it."
            },
            {
              "id": "a-145",
              "method": "did:trustbloc",
              "score": "B",
              "evaluationCitation": "#eval-2",
              "note": "A did:trustbloc is public to all users of the Hyperledger Fabric instance where it is published -- but that blockchain may be permissioned and restricted to a private audience."
            }
          ]
        },
        {
          "name": "Incentives for Multicontext DIDs",
          "id": "https://www.w3.org/TR/did-rubric#criteria-35",
          "source": ".",
          "version": "1.0.0",
          "question": {
            "question": "To what extent does the method incentivize (due to cost, hassle, etc.) a DID to be reused in multiple contexts?"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The natural and default behavior is to create a new DID in each new context, and there is no meaningful incentive to do otherwise."
              },
              {
                "label": "B",
                "meaning": "It is possible to create and manage numerous DIDs, but the latency, complexity, or monetary expense of doing so results in modest pressure to reuse a DID."
              },
              {
                "label": "C",
                "meaning": "Each DID is expensive in at least one important dimension. Incentives to reuse are strong."
              }
            ]
          },
          "relevance": "People will often trade away privacy for a low price or ease of use. Methods that encourage this tradeoff are less optimal from a privacy perspective, even if their privacy features are theoretically reasonable.",
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Score",
                "type": "enhancedLetter",
                "propertyRef": "score"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "exampleAssessments": [
            {
              "id": "a-148",
              "method": "did:btcr",
              "score": "C",
              "evaluationCitation": "#eval-2",
              "note": "At times when Bitcoin value has spiked, creating a DID on Bitcoin has required an expensive transaction. Finality also takes a significant amount of time. This creates incentives to reuse a DID in multiple contexts."
            },
            {
              "id": "a-149",
              "method": "did:sov",
              "score": "C",
              "evaluationCitation": "#eval-2",
              "note": "The Sovrin ledger deliberately charges for ledger writes to discourage its use for privacy-oriented identifiers."
            },
            {
              "id": "a-150",
              "method": "did:peer",
              "score": "A",
              "evaluationCitation": "#eval-2",
              "note": "Creating a peer DIDs is free and nearly instantaneous. There are no incentives for reuse."
            }
          ]
        }
      ]
    }
  ]
}
