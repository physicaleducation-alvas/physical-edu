import Link from "next/link";

export default function MandatoryDisclosurePage() {
  return (
    <div>
      <h2 className="text-[22px] font-semibold">Mandatory Disclosure</h2>
      <div className="w-15 h-[3px] bg-red-500 mt-2 mb-6"></div>

      <ul className="space-y-3 text-[16px]">

        <li><Link href="/mandatory-disclosure/affidavitA">Affidavit A</Link></li>
        <li><Link href="/mandatory-disclosure/affidavitB">Affidavit B</Link></li>

        <li><Link href="/mandatory-disclosure/audit">Audit Report</Link></li>
        <li><Link href="/mandatory-disclosure/balance-sheet">Balance Report</Link></li>

        <li><Link href="/mandatory-disclosure/fdrandrdr">FDR and RDR</Link></li>
        <li><Link href="/mandatory-disclosure/fees-structure">Fee Structure</Link></li>
        <li><Link href="/mandatory-disclosure/funds">Funds</Link></li>
        <li><Link href="/mandatory-disclosure/income">Income and Expenditure</Link></li>
        <li><Link href="/mandatory-disclosure/land-doc">Land Document</Link></li>
        <li><Link href="/mandatory-disclosure/ncte">NCTE Order</Link></li>
        <li><Link href="/mandatory-disclosure/nil-encumbrance">Nil Encumbrance Certificate</Link></li>
        <li><Link href="/mandatory-disclosure/receipts-and-payments">Receipts and Payments</Link></li>

      </ul>
    </div>
  );
}
