var methodsJson = [
  {
    "method": "did:btcr",
    "specification": {
      "name": "DID Method BTCR",
      "url": "https://w3c-ccg.github.io/didm-btcr/"
    },
    "network": "Bitcoin",
    "registry": "Bitcoin"
  },
  {
    "method": "did:ethr",
    "specification": {
      "name": "ethr DID Method Spec",
      "url": "https://github.com/decentralized-identity/ethr-did-resolver/blob/master/doc/did-method-spec.md"
    },
    "network": "Ethereum",
    "registry": "Specific smart contracts for each network."
  },
  {
    "method": "did:git",
    "specification": {
      "name": "DID git Spec",
      "url": "https://github.com/dhuseby/did-git-spec/blob/master/did-git-spec.md"
    },
    "network": {
      "name": "git",
      "url": "https://git-scm.com/",
      "note": "(an open source version control system)"
    },
    "registry": "Any Method-compliant git repository"
  },
  {
    "method": "did:hedera",
    "specification": {
      "name": "Hedera Hashgraph DID Method Specification",
      "url": "https://github.com/hashgraph/did-method/blob/master/did-method-specification.md"
    },
    "network": "Hashgraph, Inc",
    "registry": "DIDs written to a ledger that uses Hashgraph consensus as an alternative to traditional blockchain."
  },
  {
    "method": "did:indy",
    "specification": {
      "name": "did:indy Method Spec",
      "url": "https://github.com/hyperledger/indy-did-method"
    },
    "network": "Hyperledger Indy community",
    "registry": "Supersedes did:sov to service all Indy-based ledgers."
  },
  {
    "method": "did:ion",
    "specification": {
      "name": "did:ion Method Spec",
      "url": "https://github.com/decentralized-identity/ion"
    },
    "network": "Bitcoin and IPFS",
    "registry": "Bitcoin and IPFS"
  },
  {
    "method": "did:jlinc",
    "specification": {
      "name": "JLINC DID Method Specification",
      "url": "https://did-spec.jlinc.org/"
    },
    "network": "JLincLabs",
    "registry": "Register DIDs over the JLinc protocol for sharing data with terms and conditions."
  },
  {
    "method": "did:jolo",
    "specification": {
      "name": "Jolocom DID Method Specification",
      "url": "https://github.com/jolocom/jolocom-did-driver/blob/master/jolocom-did-method-specification.md"
    },
    "network": "Ethereum",
    "registry": "Specific smart contracts for different networks and subnetworks."
  },
  {
    "method": "did:key",
    "specification": {
      "name": "The did:key Method v0.7",
      "url": "https://w3c-ccg.github.io/did-method-key/"
    },
    "network": "CCG work item",
    "registry": "Use a keypair as a DID."
  },
  {
    "method": "did:peer",
    "specification": {
      "name": "Peer DID Method Spec",
      "url": "https://identity.foundation/peer-did-method-spec/index.html"
    },
    "network": "n/a (communications can flow over any agreeable channel)",
    "registry": "Held by each peer"
  },
  {
    "method": "did:pkh",
    "specification": {
      "name": "did:pkh Method Specification",
      "url": "https://github.com/spruceid/ssi/blob/9ecc25cb4082709d146206b779cf8e8442f9eaf3/did-pkh/did-pkh-method-draft.md"
    },
    "network": "Spruce ID",
    "registry": "Wrap an identifier (e.g., payment address) from one of many existing blockchains in did format."
  },
  {
    "method": "did:sov",
    "specification": {
      "name": "Sovrin DID Method Spec",
      "url": "https://github.com/sovrin-foundation/sovrin/blob/master/spec/did-method-spec-template.html"
    },
    "network": "Hyperledger Indy",
    "registry": "A particular instance of Hyperledger Indy"
  },
  {
    "method": "did:trustbloc",
    "specification": {
      "name": "TrustBloc DID Method Specification 0.1",
      "url": "https://github.com/trustbloc/trustbloc-did-method/blob/main/docs/spec/trustbloc-did-method.md"
    },
    "network": "Trustbloc",
    "registry": "Persist DIDs via Sidetree wrapper around a permissioned ledger."
  },
  {
    "method": "did:twit",
    "specification": {
      "name": "Twit DID method specification",
      "url": "https://github.com/did-twit/did-twit/blob/master/spec/index.md"
    },
    "network": "Gabe Cohen",
    "registry": "Publish a DID via Twitter feed."
  },
  {
    "method": "did:v1.production",
    "specification": {
      "name": "did:v1 Method Specification",
      "url": "https://w3c-ccg.github.io/did-method-v1/"
    },
    "network": {
      "name": "https://veres.one/network/",
      "url": "https://veres.one/network/"
    },
    "registry": "Same as network"
  },
  {
    "method": "did:v1.testnet",
    "specification": {
      "name": "did:v1 Method Specification",
      "url": "https://w3c-ccg.github.io/did-method-v1/"
    },
    "network": {
      "name": "https://veres.one/network/",
      "url": "https://veres.one/network/"
    },
    "registry": "Same as network"
  },
  {
    "method": "did:web",
    "specification": {
      "name": "did:web Method Specification",
      "url": "https://w3c-ccg.github.io/did-method-web/"
    },
    "network": "CCG work item",
    "registry": "DIDs associated with control of a domain name (DNS)."
  }
]
