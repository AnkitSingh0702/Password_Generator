"use client"

import React from "react";
import {  CheckBoxCard } from "@/components/ui/checkbox"
import { Generator } from "@/lib/generate";
function Check() {
    const [settings, setSettings] = React.useState({
        length: 16,
        uppercase: true,
        numbers: true,
        symbols: true,
      })
    
      const GeneratedPassword = Generator(settings)
    
      const [password, setPassword] = React.useState(GeneratedPassword)
    
      React.useEffect(() => {
        const GeneratedPassword = Generator(settings)
        setPassword(GeneratedPassword)
      }, [settings, settings.length])
  return (
    <div>
          <CheckBoxCard
            label="Capital letters"
            id="uppercase"
            defaultChecked={settings.uppercase}
            onCheckedChange={() => setSettings({ ...settings, uppercase: !settings.uppercase })}
          />
          <CheckBoxCard
            label="Numbers"
            id="numbers"
            defaultChecked={true}
            onCheckedChange={() => setSettings({ ...settings, numbers: !settings.numbers })}
          />
          <CheckBoxCard
            label="Symbols"
            id="symbols"
            defaultChecked={true}
            onCheckedChange={() => setSettings({ ...settings, symbols: !settings.symbols })}
          />
        </div>
  )
}

export default Check