// Shared constants. Every fact used on the page comes from docs/facts.md.

export const CTA = {
	href: 'https://velora.se/kom-igang',
	label: 'Boka gratis bedömningssamtal',
	shortNote: 'Kostnadsfritt · Du binder dig inte',
};

const CDN = 'https://cdn.prod.website-files.com';

// Images hotlinked from velora.se (Velora's own photography, no AI-generated people).
export const IMG = {
	logoPlum: `${CDN}/66e29f6849a1468a576a6554/6a101a99a45a449fbe357654_velora-logo-plum.svg`,
	logoWhite: `${CDN}/66e29f6849a1468a576a6554/6a1025ace76b53f17a093af6_velora-logo-white.svg`,
	// Largest available source is 1024 px wide; swap for an extended/high-res version when one exists.
	hero: `${CDN}/66e29f6849a1468a576a6554/6a70ec1ce46e6779d6eafe3c_velora-hero.avif`,
	heroSmall: `${CDN}/66e29f6849a1468a576a6554/6a70ec1ce46e6779d6eafe3c_velora-hero-p-800.avif`,
	heroMedium: `${CDN}/66e29f6849a1468a576a6554/6a70ec1ce46e6779d6eafe3c_velora-hero-p-1080.avif`,
	videoMeeting: `${CDN}/66e29f6849a1468a576a6554/689c76bcda336c55b1854d19_ef69c49a4e58c16fe3a2314467a1ece5_online-doktor.avif`,
	// Used only in the navbar's Viktmediciner menu (entry 29), not on the page itself.
	// velora.se's "Vilka resultat får jag?" card photo (entry 155).
	weightLoss: `${CDN}/66e29f6849a1468a576a6554/69737da461ce6474c1f006db_fbc869c1b0130c522909afaa920c04ef_Weight_Loss_Compressed-p-1080.avif`,
	pen: `${CDN}/66e29f6849a1468a576a6554/696900e01a3059e9a079a63e_6d03debe64c4f24446e245f138deeb35_GLP-1-pen.avif`,
	sofa: `${CDN}/66e29f6849a1468a576a6554/6969027e389e7b077568828f_Velora-abonnemang.avif`,
	caroline: `${CDN}/66e29f6849a1468a576a6581/6a74a6a6812506892a591912_Caroline_Velora.avif`,
	manga: `${CDN}/66e29f6849a1468a576a6581/6a70d91542c5598bcec386b9_Manga_Velora.avif`,
	roger: `${CDN}/66e29f6849a1468a576a6581/6a70d8d0c8d6118b6c98cd2b_Roger.avif`,
	mina: `${CDN}/66e29f6849a1468a576a6581/6adb2faf8dc9abec5e482a78_Mina.avif`,
	daniel: `${CDN}/66e29f6849a1468a576a6581/6adb2fa32da9d41f08324dbf_Daniel.avif`,
	sandra: `${CDN}/66e29f6849a1468a576a6581/6adb2f9a8c76b49f3929b60f_Sandra.avif`,
};

export const VELORA = 'https://www.velora.se';
