import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Playground() {
  // 1. 这两个就是 React 版的变量，等价于 Kotlin 里的 var username = "" / var password = ""
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 2. 这个是 React Router 给你的跳转器，等价于 Android 的 startActivity()
  const navigate = useNavigate();

  // 查看 localStorage 里有没有“登录状态”
  const storedTokenRaw = localStorage.getItem("auth");
  const storedToken = storedTokenRaw ? JSON.parse(storedTokenRaw) : null;

  // 当用户按下 "Save Locally"
  const handleSaveLocal = () => {
    // 3. 我们模拟“后端给了一个 token”
    const fakeToken = "abc123-" + username;

    // 存进 localStorage，这等价于“记住我已经登录”
    localStorage.setItem("auth", JSON.stringify(fakeToken));
    alert("Saved token to localStorage: " + fakeToken);
  };

  // 当用户按下 "Go Dashboard"
  const handleGoDashboard = () => {
    // 4. 这就等价于 navigate("/dashboard")
    navigate("/dashboard");
  };

  // 当用户按下 "Clear Login"
  const handleLogout = () => {
    localStorage.removeItem("auth");
    alert("Token cleared.");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#1a1f2b,#2a3350)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "2rem",
      fontFamily: "sans-serif"
    }}>

      <h1>Playground / Learning Zone</h1>

      <div style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "1rem",
        maxWidth: "320px"
      }}>
        <h2 style={{marginTop:0}}>1. 输入绑定 (useState)</h2>

        <label>Username</label>
        <input
          style={{width:"100%", padding:"8px", borderRadius:"6px", border:"none", marginBottom:"10px"}}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="type username..."
        />

        <label>Password</label>
        <input
          style={{width:"100%", padding:"8px", borderRadius:"6px", border:"none"}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="type password..."
        />

        <p style={{fontSize:"0.9rem", color:"#bbb"}}>
          当前 state: {username ? username : "(username 空)"} / {password ? "••••" : "(password 空)"}
        </p>
        <p style={{fontSize:"0.8rem", color:"#888"}}>
          这就等价于 Kotlin 的变量 + addTextChangedListener。
        </p>
      </div>


      <div style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "1rem",
        maxWidth: "320px"
      }}>
        <h2 style={{marginTop:0}}>2. 模拟“登录后记住我”</h2>
        <button
          style={{width:"100%", padding:"10px", borderRadius:"8px", background:"#6c63ff", border:"none", color:"#fff", fontWeight:600, cursor:"pointer", marginBottom:"8px"}}
          onClick={handleSaveLocal}
        >
          Save Locally (假装Login成功)
        </button>

        <button
          style={{width:"100%", padding:"10px", borderRadius:"8px", background:"#4b47d6", border:"none", color:"#fff", fontWeight:600, cursor:"pointer", marginBottom:"8px"}}
          onClick={handleGoDashboard}
        >
          Go Dashboard (导航跳转)
        </button>

        <button
          style={{width:"100%", padding:"10px", borderRadius:"8px", background:"#444", border:"none", color:"#fff", fontWeight:600, cursor:"pointer"}}
          onClick={handleLogout}
        >
          Clear Login (登出)
        </button>

        <p style={{fontSize:"0.9rem", color:"#bbb", marginTop:"10px"}}>
          现在 localStorage 里保存的 token:
          <br/>
          {storedToken ? storedToken : "(无 token，表示目前未登录)"}
        </p>

        <p style={{fontSize:"0.8rem", color:"#888"}}>
          localStorage 就像是“浏览器的本地记忆”。  
          在 Kotlin CLI 里没有这种长期记忆，除非你写到文件/DB。  
          在 Android 里会用 SharedPreferences;
          localStorage 跟 SharedPreferences 是同等级角色。
        </p>
      </div>


      <div style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "1rem",
        maxWidth: "320px"
      }}>
        <h2 style={{marginTop:0}}>3. 你必须会解释的4句话</h2>
        <ol style={{fontSize:"0.8rem", color:"#ccc", paddingLeft:"1rem", lineHeight:"1.4rem"}}>
          <li>useState 让组件记住当前输入的值。</li>
          <li>onChange 把输入框的值写回 state，就像 Kotlin 里的监听器。</li>
          <li>fetch/后端：我们会把这些值发到服务器做登录验证。</li>
          <li>localStorage 保存登录状态，Dashboard 会根据它决定能不能进。</li>
        </ol>
      </div>

    </div>
  );
}
