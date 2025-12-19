// ============================================
// VIKY'S WORKSHOP - 网站内容配置文件
// 注意：文字需要用引号 "" 包裹，逗号不能少
// ============================================

const CONFIG = {
    // --- 1. 个人信息 ---
    profile: {
        name: "VIKY",
        title: "游戏UI设计 / 平面与插画 / 法师学徒",
        subtitle: "“玩游戏的，都是朋友”",
        // 状态栏文字
        status: "南山绝赞加班中",
        lastUpdate: "2025.12.19",
        // 头像图片链接 (可以是本地文件路径，也可以是网络链接)
        avatar: "pics/Viky-Delta.png",
        // 自我介绍
        intro: "我是 Viky，UI/平面设计师，深圳互联网民工，全平台玩家，赛博末日囤积癖，金属徽章爱好者。"
    },

    // --- 2. 社交链接 (跳转地址) ---
    social: {
        zcool: "https://www.zcool.com.cn/u/15040519",
        bilibili: "https://space.bilibili.com/6519724",
        steam: "https://steamcommunity.com/profiles/76561198315059649/",
        email: "mailto:vikydruid@gmail.com" // mailto: 开头会自动唤起邮件客户端
    },

    // --- 3. 作品列表 (在这里添加或删除作品) ---
    // cat (分类) 必须是以下之一: "UI", "Web", "Brand", "Art"
    projects: [
        { 
            id: 1, 
            title: "NEON GENESIS", 
            cat: "UI", 
            year: "2024", 
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", 
            desc: "赛博朋克游戏HUD界面系统设计，强调高对比度与信息层级。", 
            tools: ["Figma", "AE"] 
        },
        { 
            id: 2, 
            title: "DATA VAULT", 
            cat: "Web", 
            year: "2023", 
            img: "https://images.unsplash.com/photo-1515630278258-407f66498911?w=800&q=80", 
            desc: "加密数据存储服务着陆页，使用WebGL粒子特效。", 
            tools: ["React", "WebGL"] 
        },
        // 复制上面的花括号块 {...}, 来添加新作品...
    ]
};
