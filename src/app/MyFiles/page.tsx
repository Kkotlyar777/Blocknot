import { Metadata } from "next";
import { PageClient } from "./pageClient";

export const metadata: Metadata = {
  title: "Files",
};

export default function files() {
  return <PageClient />;
}
