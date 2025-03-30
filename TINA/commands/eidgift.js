module.exports.config = {
    name: "eid gift",
    version: "1.0.0",
    hasPermission: 0,
    credits: "RAHAT",
    description: "GIFT",
    usePrefix: true,
    commandCategory: "Khan Rahul RK",
    usages: "EID GIFT",
    cooldowns: 5,
    dependencies: {
		}
	},

	run: async function ({ api, event, args }) {
		const gifts = [
			{ url: "https://i.imgur.com/T6oQq96.png", caption: "🤖 AI নে তোর জন্য iPhone 16!" },
			{ url: "https://i.imgur.com/pCvdy8c.png", caption: "🏎️ কিরে ল্যাম্বোরগিনি পেয়ে গেছিস! মামা ট্রামে GF নিয়ে ঘুরতে যাবি নাকি?" },
			{ url: "https://i.imgur.com/wHUW1QC.png", caption: "🎁 ওহ মামা, কি জিনিস পাইলি!" },
			{ url: "https://i.imgur.com/frarY1Q.png", caption: "🚗 তোর জন্য ব্র্যান্ড নিউ Tesla! GF রে নিয়ে ঘুরিস!" },
			{ url: "https://i.imgur.com/awNHXek.png", caption: "🌙 ঈদ মোবারক ভাই!" },
			{ url: "https://i.imgur.com/gRZBBhM.png", caption: "🎨 যা খুশি বানাও, ঈদে সবই চলে! 😆" },
			{ url: "https://i.imgur.com/ntLnJcU.png", caption: "😢 Sad but তোর কুত্তা ভাগ্য!" },
			{ url: "https://i.imgur.com/LPVua5T.png", caption: "❤️ দোস্ত, তোর লাগি GF!" }
		];

		const mentions = event.mentions;
		const mentionIDs = Object.keys(mentions);

		if (mentionIDs.length === 0) {
			return api.sendMessage("⚠️ দয়া করে একজনকে মেনশন করুন ঈদ গিফট দেওয়ার জন্য!", event.threadID);
		}

		const selectedGift = gifts[Math.floor(Math.random() * gifts.length)];
		const mentionedUser = mentions[mentionIDs[0]].replace(/@/g, "");

		api.sendMessage({
			body: `🎊 ${mentionedUser}, তোমার জন্য একটি ঈদ উপহার! 🎁\n${selectedGift.caption}`,
			attachment: await global.utils.getStreamFromURL(selectedGift.url)
		}, event.threadID, event.messageID);
	}
};
