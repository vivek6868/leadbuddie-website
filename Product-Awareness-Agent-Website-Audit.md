# Audit — Product Awareness Agent on the Marketing Website

**Question:** LeadBuddie now has a Product Awareness Agent — when a business runs multiple products, Buddie captures the enquiry, matches the *correct* product, and replies with that product's details, image/video, brochure, and payment/website link. Is this on the marketing site, and how should it be added?

**Short answer:** The capability is *hinted at* in a few secondary components, but it is **not named, not explained, and completely absent from the pages that matter (homepage, and only obliquely on `/product`)**. This is one of your most differentiated features and right now a visitor cannot tell you have it. Coverage score: **2/10**.

---

## 1. What the feature actually is (grounded in the app code)

From `leadmate-hutliv` (`lib/buddie/product-reply.ts`, `pricing-catalog.ts`, `components/settings/services-pricing-tab.tsx`):

- **Name in-app:** "Product Awareness Agent" — a per-business toggle (`agent_configs.allowed_actions.product_reply_mode`) in Services & Pricing settings.
- **Plan gate:** Growth and above (`productAwarenessAgent && assetLibrary`). In-app copy: *"Automatically reply with product details, image, brochure & booking — available on Growth and above."*
- **Trigger:** *"When a customer asks for — or clicks an ad about — a product, Buddie automatically replies with its details, image/video, brochure, buy-link and booking."* Flow: **ad → product → details / image / brochure / buy-link → booking.**
- **Matching:** deterministic keyword + name matching against the owner's catalog; the most specific match wins; empty/no match → it sends nothing (never guesses). It is **fact-locked** — only the owner's real prices and assets, never invented.
- **What the owner configures per product:** name, ₹ price range, match keywords, short description, one image *or* video, a brochure PDF, a buy/payment/website link, a booking type, and per-product FAQs. Products have per-plan capacity (extra products "paused by your plan").
- **What Buddie sends:** intro text (name + description + price), image/video first then brochure, the buy link inline ("You can check it and proceed here: …"), then the matching booking offer.

**Why it matters for marketing:** this is the answer to a real, common Indian-SMB objection — *"I sell 10 different things, a bot will send the wrong info."* The story writes itself: **"Running many products? Buddie sends the right one — with the right photo, brochure, and payment link."** It also pairs perfectly with **click-to-WhatsApp Meta ads**, which most of your target dealers already run.

## 2. Current coverage on the site (what's actually there)

The concept appears only as scattered, generic "attaches the right asset" phrasing in secondary components — never as a named, multi-product feature:

- `components/sections/AiCopilotCapabilities.tsx` — *"Catalog PDF, AMC plan brochure, product image, install video — your AI agent attaches the right asset based on what the customer asked."*
- `components/sections/WhatsAppFlowDemo.tsx` — *"picks the right asset for what the customer asked"* / "Catalog auto-attached."
- `components/landing/AiEmployeePage.tsx` — a brochure/catalog example and "Payment link dispatch."
- `app/product/page.tsx` (just reworked) — one deep-dive bullet: *"Auto-attaches the right asset (PDF, brochure, video)."*

**The gap:** every one of these says "the right *asset*" — none says "the right **product**." The differentiator isn't attaching a file; it's **correctly identifying which product a multi-product business is being asked about (even from an ad click) and sending that product's photo/video + brochure + payment link + booking.** That story is told nowhere. And it's **absent from the homepage entirely.**

## 3. Gaps

1. **Not named.** "Product Awareness Agent" appears on zero marketing pages.
2. **No multi-product angle.** The hard, believable problem — "I sell many products, will it send the right one?" — is never raised or answered.
3. **No ad → product story.** Click-to-WhatsApp ad → correct product reply is a killer demo and isn't shown.
4. **No visual.** There's no "customer asks / clicks ad → Buddie sends the matched product card (photo, price, brochure, pay link)" visual anywhere.
5. **Media types understated.** Image *and video* + brochure PDF + **payment/website link** — the site mentions brochures/catalogs but rarely the product image/video and buy/payment link together.
6. **Pricing doesn't call it out.** Growth lists "Send brochures and catalogs from media library," but the *Product Awareness Agent* (a real Growth+ entitlement) isn't a named line, so buyers can't see which plan unlocks it.
7. **No FAQ** addressing "Will Buddie send the wrong product?" or "Can it send images/videos/payment links?"
8. **SEO miss.** No page targets "WhatsApp product catalog auto-reply," "auto-send brochure on WhatsApp," or "click to WhatsApp ads product reply."

## 4. Where to add it (recommended)

1. **Homepage — new section** (highest priority), placed right after the Booking Wow / Works-for-your-business block: *"Selling many products? Buddie sends the right one."* with the match visual.
2. **`/product` — promote to a first-class pillar** (not a sub-bullet): a "Product Awareness Agent" deep-dive with the matched-product card visual.
3. **`/features`** — add a named feature entry.
4. **Pricing** — add a Growth bullet: *"Product Awareness Agent — auto-matches the right product + sends image/video, brochure & payment link."*
5. **FAQ** — add the two questions below.
6. **New SEO landing page** (later): `/whatsapp-product-catalog` or `/product-awareness-agent` targeting the catalog/ad keywords.

## 5. Ready-to-ship copy

**Homepage section**
> **Eyebrow:** Product Awareness Agent
> **Headline:** Selling many products? Buddie sends the right one.
> **Sub:** When a customer asks about a product — or clicks your WhatsApp ad — Buddie matches it to your catalog and replies with the right photo or video, brochure, price, and payment link. Then offers the matching booking. Every detail comes from your catalog, so it's always accurate — never invented.

**The visual (build spec)** — the wow is a *matched* reply:
> Left: customer message "Do you have a water softener?" *(or a Meta ad card: "Clicked your ad: Bridal Makeup")*.
> Middle: a small "matched to your catalog" chip.
> Right: a WhatsApp-style **product card** — product image/video thumbnail, name + ₹ price, a brochure (PDF) chip, a "Pay / Buy" link button, and a "Book a demo?" line.
> Caption: "One catalog. Buddie always sends the right product."

**Pricing bullet (Growth)**
> Product Awareness Agent — auto-matches the right product and sends its image/video, brochure & payment link

**FAQ additions**
> **I sell many products — will Buddie send the wrong one?**
> No. Buddie matches each enquiry to your product catalog using the keywords you set, and only sends a product it's confident about — never a guess. All details (price, description, brochure, link) come straight from your catalog, so replies are always accurate.
>
> **Can Buddie send images, videos and payment links — not just text?**
> Yes. For each product you can add an image or video, a brochure PDF, and a payment or website link. When the product matches, Buddie sends them automatically and then offers the matching booking. (Product Awareness Agent is available on Growth and above.)

## 6. SEO opportunity

Target keywords this feature unlocks (none currently covered): *WhatsApp product catalog automation, auto send product brochure on WhatsApp, click to WhatsApp ads auto reply, WhatsApp catalog reply bot, send price list on WhatsApp automatically, WhatsApp product image auto reply India.* A dedicated landing page + FAQ schema for the two Q&As above would compete for these directly.

## 7. Honesty guardrails (keep claims true to the code)

- Say **"matches your catalog using keywords you set,"** not "AI understands any product magically" — matching is deterministic and owner-configured. This is actually a *trust* advantage: it can't hallucinate a product.
- Keep **"never invents prices/claims — everything comes from your catalog"** front and centre; it's literally how the code works and it's reassuring.
- Label it **Growth+** wherever you show it (matches the in-app plan gate).
- Image **or** video per product (not both simultaneously) — say "image or video" to stay accurate.
- It sends a product **only when it's confident** — frame the no-match behaviour as "asks a clarifying question / hands to you," not "always sends something."

## 8. Verdict & recommendation

| | |
|---|---|
| Current coverage | **2/10** — hinted, never named or shown |
| Differentiation value | **High** — directly kills the "it'll send the wrong info" objection and pairs with click-to-WhatsApp ads |
| Effort to add | **Low–medium** — one homepage section + product pillar + pricing bullet + 2 FAQs; reuses existing design atoms |

**Recommendation:** Add a named **Product Awareness Agent** section to the homepage with the matched-product-card visual, promote it to a pillar on `/product`, add the Growth pricing bullet and the two FAQ entries, and (later) a dedicated SEO landing page. This is a fast, high-leverage addition — the feature is genuinely differentiated and currently invisible to buyers.
