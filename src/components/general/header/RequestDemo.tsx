"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import { CalendarIcon } from "lucide-react"

import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useTranslation } from "react-i18next";
import { PhoneInput, type PhoneValue } from "@/components/compound/PhoneInput";
interface Props {
  isHome?: boolean;
}

const RequestDemo = ({ isHome = false }: Props) => {
    const { t } = useTranslation("hero");

  const gradient = "linear-gradient(90deg, #6594D0 0%, #071C36 100%)";
    const [date, setDate] = React.useState<Date>()
    const [phone, setPhone] = React.useState<PhoneValue>({
        code: "EG",
        number: "",
    });

  return (
        <Dialog>
      <DialogTrigger>
        <button
          className={`md:w-46.75 h-14 w-[300px] rounded-4xl text-lg font-semibold transition-all duration-300 ${
            isHome ? "bg-[#FEFEFE33] text-white" : "text-white shadow-lg"
          }`}
          style={!isHome ? { background: gradient } : undefined}
        >
          {t('request_demo')}
    </button>
      </DialogTrigger>
      <DialogContent className="w-300! max-h-screen overflow-scroll">
        <DialogHeader>
          <DialogTitle className="text-[#001B3F] text-center">
            {t('get_demo')}
          </DialogTitle>
          <DialogDescription>
            <p className="text-[#565555] text-lg font-medium text-center">
                {t('get_demo_desc')}
            </p>
                <form>
                  <div className="flex flex-wrap gap-6">
                      {/* name */}
                      <div className="flex flex-col gap-4">
                          <label 
                              htmlFor="name"
                              className="text-[#0F0F0F] text-base font-medium"
                          >
                              {t('name')}
                          </label>
                          <input 
                              type="text" 
                              name="name" 
                              className="w-137 h-14 border border-[#C8C8C8] rounded-4xl px-4"
                              placeholder={t('enter_your_name')}
                          />
                      </div>
                      {/* Company name */}
                      <div className="flex flex-col gap-4">
                          <label 
                              htmlFor="company_name"
                              className="text-[#0F0F0F] text-base font-medium"
                          >
                              {t('company_name')}
                          </label>
                          <input 
                              type="text" 
                              name="company_name" 
                              className="w-137 h-14 border border-[#C8C8C8] rounded-4xl px-4"
                              placeholder={t('enter_your_company_name')}
                          />
                      </div>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-10">
                      {/* Type of Business */}
                      <div className="flex flex-col gap-4">
                          <label 
                              htmlFor="type_of_business"
                              className="text-[#0F0F0F] text-base font-medium"
                          >
                              {t('type_of_business')}
                          </label>
                          <Select>
                          <SelectTrigger className="w-137 h-14! rounded-4xl">
                              <SelectValue placeholder={t('choose_type')} />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                          </Select>
                      </div>
                      {/* Number of Branches */}
                      <div className="flex flex-col gap-4">
                          <label 
                              htmlFor="NOF_branches"
                              className="text-[#0F0F0F] text-base font-medium"
                          >
                              {t('number_of_branches')}
                          </label>
                          <Select>
                          <SelectTrigger className="w-137 h-14! rounded-4xl">
                              <SelectValue placeholder={t('choose_number')} />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                          </Select>
                      </div>
                  </div>

                  <div className="flex md:flex-row flex-col gap-6 mt-10 w-full">
                      <div className="flex flex-col gap-4 w-full">
                          <label 
                              htmlFor="name"
                              className="text-[#0F0F0F] text-base font-medium"
                          >
                              {t('phone_number')}
                          </label>
                          <PhoneInput
                            value={phone}
                            onChange={(newValue) => setPhone(newValue)}
                            />
                      </div>
                      <div className="flex flex-col gap-4">
                          <label 
                              htmlFor="company_name"
                              className="text-[#0F0F0F] text-base font-medium"
                          >
                              {t('email')}
                          </label>
                          <input 
                              type="email" 
                              name="email" 
                              className="w-137 h-14 border border-[#C8C8C8] rounded-4xl px-4"
                              placeholder={t('enter_your_email')}
                          />
                      </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-10">
                      <label htmlFor="request_demo" className="text-[#0F0F0F] text-base font-medium">
                          {t('request_demo')}
                      </label>
                      <Popover>
                          <PopoverTrigger asChild  className="w-full! h-14 rounded-4xl">
                          <Button
                              variant="outline"
                              data-empty={!date}
                              className="data-[empty=true]:text-muted-foreground w-70 justify-between text-left font-normal"
                          >
                              {date ? format(date, "PPP") : <span>{t("choose_a_day")}</span>}
                              <CalendarIcon />
                          </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} />
                          </PopoverContent>
                      </Popover>
                  </div>

                  <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-4xl">
                      {t('send')}
                  </button>
              </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemo;
