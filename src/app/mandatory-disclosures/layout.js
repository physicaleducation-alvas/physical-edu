import Link from "next/link";

export default function MandatoryDisclosureLayout() {
    return ( 
<>
<div>
      <h2 className="text-[22px] font-semibold">Mandatory Disclosure</h2>
      <div className="w-15 h-[3px] bg-red-500 mt-2 mb-6"></div>

      <ul className="space-y-3 text-[16px]">

        <li><Link href="/mandatory-disclosures/affidavitA">Affidavit A</Link></li>
        <li><Link href="/mandatory-disclosures/affidavitB">Affidavit B</Link></li>

        <li><Link href="/mandatory-disclosures/audit">Audit Report</Link></li>
        <li><Link href="/mandatory-disclosures/balance-sheet">Balance Report</Link></li>

        <li><Link href="/mandatory-disclosures/fdr-and-rdr">FDR and RDR</Link></li>
        <li><Link href="/mandatory-disclosures/fee-structure">Fee Structure</Link></li>
        <li><Link href="/mandatory-disclosures/funds">Funds</Link></li>
        <li><Link href="/mandatory-disclosures/income-and-expenditure">Income and Expenditure</Link></li>
        <li><Link href="/mandatory-disclosures/land-document">Land Document</Link></li>
        <li><Link href="/mandatory-disclosures/ncte-order">NCTE Order</Link></li>
        <li><Link href="/mandatory-disclosures/nil-encumbrance-certificate">Nil Encumbrance Certificate</Link></li>
        <li><Link href="/mandatory-disclosures/receipts-and-payments">Receipts and Payments</Link></li>

      </ul>
    </div>
</>

    );}