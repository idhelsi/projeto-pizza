"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/stores/auth'
import { ArrowLeftIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LoginAreaStepEmail } from './login-area-step-email'

type Steps = "EMAIL" | "SIGNUP" | "SIGNIN"

export const LoginAreaDialog = () => {
    const auth = useAuth()

    const [step, setStep] = useState<Steps>("EMAIL")
    const [emailField, setEmailField] = useState("")

    const handleStepEmail = (hasEmail: boolean, email: string) => {
        setEmailField(email)
        if (hasEmail) {
            setStep("SIGNUP")
        } else {
            setStep("SIGNIN")
        }
    }

    return (
        <Dialog
            open={auth.open}
            onOpenChange={open => auth.setOpen(open)}
        >
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 ">
                        {step !== 'EMAIL' && (
                            <Button 
                                variant="ghost"
                                size="icon"
                                onClick={() => setStep("EMAIL")}
                            >
                                <ArrowLeftIcon className="size-4" />
                            </Button>
                        )}

                        {step === "EMAIL" && "Login / Cadastro"}
                        {step === "SIGNUP" && "Cadastro"}
                        {step === "SIGNIN" && "Login"}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    {step === 'EMAIL' && 
                        <LoginAreaStepEmail onValidate={handleStepEmail} />
                    }
                    {step === 'SIGNUP' && 
                        <div>Login</div>
                    }
                    {step === 'SIGNIN' && 
                        <div>Cadastro</div>
                    }
                    
                </div>
            </DialogContent>
        </Dialog>
    )
}