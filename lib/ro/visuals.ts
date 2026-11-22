export type RoVisualCopy = {
  sample: string
  customers: { caption: string; alt: string; title: string; due: string }
  dues: { caption: string; alt: string; title: string; upcoming: string; request: string }
  job: { caption: string; alt: string; title: string; assigned: string; visit: string; address: string }
  amc: { caption: string; alt: string; title: string; ends: string; active: string; renewal: string }
  phone: { caption: string; alt: string; jobs: string; card: string; complete: string }
  upload: { caption: string; alt: string; sheet: string; upload: string; list: string }
  photo: { caption: string; alt: string }
}

export const visualsEn: RoVisualCopy = {
  sample: 'Sample',
  customers: {
    caption: 'Sample illustration. A customer list after an Excel upload. Fictional names in Coimbatore, not a live account.',
    alt: 'Illustration of a LeadBuddie RO customer list imported from Excel. Three fictional customers in Coimbatore, each with an area, a sample purifier model and a next service due date.',
    title: 'Customers',
    due: 'Next service due',
  },
  dues: {
    caption: 'Sample illustration. Upcoming service dues on the customer record.',
    alt: 'Illustration of a service due list. Fictional Coimbatore customers with an upcoming service or an open service request.',
    title: 'Service due',
    upcoming: 'Upcoming',
    request: 'Open request',
  },
  job: {
    caption: 'Sample illustration. The office assigns an engineer and opens a digital job card.',
    alt: 'Illustration of a digital job card. A fictional customer in RS Puram, Coimbatore, assigned to a sample engineer, with the purifier model and the reason for the visit.',
    title: 'Digital job card',
    assigned: 'Assigned to Arjun (sample)',
    visit: 'Visit: service due',
    address: '14 Sample Street, RS Puram',
  },
  amc: {
    caption: 'Sample illustration. AMC end date and amount on the same customer.',
    alt: 'Illustration of an AMC renewals list. Fictional Coimbatore customers with an AMC end date, an amount, and whether the renewal is active or due.',
    title: 'AMC renewals',
    ends: 'Ends',
    active: 'Active',
    renewal: 'Renewal due',
  },
  phone: {
    caption: 'Sample illustration of the LeadBuddie Engineer app. Assigned jobs, the job card and mark complete. Not a live screen.',
    alt: 'Phone illustration of the LeadBuddie Engineer app. Two fictional assigned jobs in Coimbatore, a job card for Lakshmi Nair, and a mark complete button.',
    jobs: 'Assigned jobs',
    card: 'Job card',
    complete: 'Mark complete',
  },
  upload: {
    caption: 'Sample illustration. Start with the Excel file you already have.',
    alt: 'Illustration of an Excel file being uploaded into a LeadBuddie RO customer list. No live data.',
    sheet: 'Your Excel',
    upload: 'Upload',
    list: 'Customer list',
  },
  photo: {
    caption: 'Illustration',
    alt: 'Illustration of an RO engineer in a customer’s kitchen, marking a job complete on his phone with the LeadBuddie Engineer app.',
  },
}

export const visualsHi: RoVisualCopy = {
  sample: 'नमूना',
  customers: {
    caption: 'नमूना चित्र। Excel अपलोड के बाद ग्राहक सूची। कोयंबटूर के काल्पनिक नाम, कोई लाइव खाता नहीं।',
    alt: 'Excel से आई LeadBuddie RO ग्राहक सूची का चित्र। कोयंबटूर के तीन काल्पनिक ग्राहक, क्षेत्र, नमूना प्यूरीफायर मॉडल और अगली सर्विस की तारीख के साथ।',
    title: 'ग्राहक',
    due: 'अगली सर्विस',
  },
  dues: {
    caption: 'नमूना चित्र। ग्राहक रिकॉर्ड पर आने वाली सर्विस ड्यू।',
    alt: 'सर्विस ड्यू सूची का चित्र। कोयंबटूर के काल्पनिक ग्राहक, आने वाली सर्विस या खुली सर्विस रिक्वेस्ट के साथ।',
    title: 'सर्विस ड्यू',
    upcoming: 'आने वाली',
    request: 'खुली रिक्वेस्ट',
  },
  job: {
    caption: 'नमूना चित्र। ऑफिस इंजीनियर असाइन करता है और डिजिटल जॉब कार्ड खोलता है।',
    alt: 'डिजिटल जॉब कार्ड का चित्र। RS Puram, कोयंबटूर की काल्पनिक ग्राहक, नमूना इंजीनियर को असाइन, प्यूरीफायर मॉडल और विज़िट का कारण।',
    title: 'डिजिटल जॉब कार्ड',
    assigned: 'असाइन: अर्जुन (नमूना)',
    visit: 'विज़िट: सर्विस ड्यू',
    address: '14 Sample Street, RS Puram',
  },
  amc: {
    caption: 'नमूना चित्र। AMC की आखिरी तारीख और रकम उसी ग्राहक पर।',
    alt: 'AMC रिन्यूअल सूची का चित्र। कोयंबटूर के काल्पनिक ग्राहक, AMC अंत, रकम, और रिन्यूअल सक्रिय है या बाकी।',
    title: 'AMC रिन्यूअल',
    ends: 'समाप्त',
    active: 'सक्रिय',
    renewal: 'रिन्यूअल बाकी',
  },
  phone: {
    caption: 'LeadBuddie Engineer ऐप का नमूना चित्र। असाइन किए जॉब, जॉब कार्ड और मार्क कम्प्लीट। लाइव स्क्रीन नहीं।',
    alt: 'LeadBuddie Engineer ऐप का फ़ोन चित्र। कोयंबटूर के दो काल्पनिक जॉब, लक्ष्मी नायर का जॉब कार्ड, और मार्क कम्प्लीट बटन।',
    jobs: 'असाइन किए जॉब',
    card: 'जॉब कार्ड',
    complete: 'मार्क कम्प्लीट',
  },
  upload: {
    caption: 'नमूना चित्र। जो Excel फ़ाइल आपके पास है, उसी से शुरू करें।',
    alt: 'Excel फ़ाइल को LeadBuddie RO ग्राहक सूची में अपलोड करने का चित्र। कोई लाइव डेटा नहीं।',
    sheet: 'आपकी Excel',
    upload: 'अपलोड',
    list: 'ग्राहक सूची',
  },
  photo: {
    caption: 'चित्रण',
    alt: 'चित्रण: एक RO इंजीनियर ग्राहक की रसोई में फ़ोन पर LeadBuddie Engineer ऐप में जॉब पूरा चिह्नित कर रहा है।',
  },
}

export const visualsTa: RoVisualCopy = {
  sample: 'மாதிரி',
  customers: {
    caption: 'மாதிரி படம். Excel பதிவேற்றத்திற்குப் பின் வாடிக்கையாளர் பட்டியல். கோயம்பத்தூரின் கற்பனை பெயர்கள். நேரடி கணக்கு அல்ல.',
    alt: 'Excel-லிருந்து வந்த LeadBuddie RO வாடிக்கையாளர் பட்டியலின் படம். கோயம்பத்தூரின் மூன்று கற்பனை வாடிக்கையாளர்கள், ஏரியா, மாதிரி பியூரிஃபையர், அடுத்த சேவை தேதி.',
    title: 'வாடிக்கையாளர்கள்',
    due: 'அடுத்த சேவை',
  },
  dues: {
    caption: 'மாதிரி படம். வாடிக்கையாளர் பதிவில் வரவிருக்கும் சேவை நிலுவை.',
    alt: 'சேவை நிலுவை பட்டியலின் படம். கோயம்பத்தூரின் கற்பனை வாடிக்கையாளர்கள், வரவிருக்கும் சேவை அல்லது திறந்த கோரிக்கை.',
    title: 'சேவை நிலுவை',
    upcoming: 'வரவிருக்கும்',
    request: 'திறந்த கோரிக்கை',
  },
  job: {
    caption: 'மாதிரி படம். அலுவலகம் இன்ஜினியரை நியமித்து டிஜிட்டல் ஜாப் கார்டைத் திறக்கும்.',
    alt: 'டிஜிட்டல் ஜாப் கார்டின் படம். RS Puram, கோயம்பத்தூர் கற்பனை வாடிக்கையாளர், மாதிரி இன்ஜினியர், பியூரிஃபையர் மாடல், வருகைக்கான காரணம்.',
    title: 'டிஜிட்டல் ஜாப் கார்டு',
    assigned: 'நியமனம்: அர்ஜுன் (மாதிரி)',
    visit: 'வருகை: சேவை நிலுவை',
    address: '14 Sample Street, RS Puram',
  },
  amc: {
    caption: 'மாதிரி படம். AMC முடிவு தேதியும் தொகையும் அதே வாடிக்கையாளரிடம்.',
    alt: 'AMC renewal பட்டியலின் படம். கோயம்பத்தூரின் கற்பனை வாடிக்கையாளர்கள், AMC முடிவு, தொகை, renewal செயலில் உள்ளதா அல்லது நிலுவையா.',
    title: 'AMC renewal',
    ends: 'முடிவு',
    active: 'செயலில்',
    renewal: 'Renewal நிலுவை',
  },
  phone: {
    caption: 'LeadBuddie Engineer ஆப்பின் மாதிரி படம். நியமித்த வேலை, ஜாப் கார்டு, முடித்ததாகக் குறி. நேரடி திரை அல்ல.',
    alt: 'LeadBuddie Engineer ஆப்பின் போன் படம். கோயம்பத்தூரின் இரண்டு கற்பனை வேலைகள், லக்ஷ்மி நாயரின் ஜாப் கார்டு, முடிப்பு பொத்தான்.',
    jobs: 'நியமித்த வேலைகள்',
    card: 'ஜாப் கார்டு',
    complete: 'முடிந்தது எனக் குறி',
  },
  upload: {
    caption: 'மாதிரி படம். இருக்கும் Excel கோப்பிலிருந்தே தொடங்குங்கள்.',
    alt: 'Excel கோப்பு LeadBuddie RO வாடிக்கையாளர் பட்டியலில் பதிவேற்றப்படும் படம். நேரடி தரவு இல்லை.',
    sheet: 'உங்கள் Excel',
    upload: 'பதிவேற்றம்',
    list: 'வாடிக்கையாளர் பட்டியல்',
  },
  photo: {
    caption: 'விளக்கப்படம்',
    alt: 'விளக்கப்படம்: ஒரு RO இன்ஜினியர் வாடிக்கையாளர் சமையலறையில் போனில் LeadBuddie Engineer ஆப்பில் வேலையை முடித்ததாகக் குறிக்கிறார்.',
  },
}
