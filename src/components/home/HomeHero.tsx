import { useTranslation } from "react-i18next";
import Whatsapp from "../icons/home/Whatsapp";
import WhiteArrow from "../icons/home/WhiteArrow";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { PhoneInput, type PhoneValue } from "../compound/PhoneInput";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import React from "react";
import { format } from "date-fns";

const HomeHero = () => {
  const { t } = useTranslation("hero");
  const [date, setDate] = React.useState<Date>()
  const [phone, setPhone] = React.useState<PhoneValue>({
      code: "EG",
      number: "",
  });
  return (
    <section
      className="min-h-dvh pt-24"
      style={{
        background: "linear-gradient(0.5deg, #FEFEFE 0.43%, #03316C 99.57%)",
      }}
    >
      <div className="container">
        <h2 className="lg:w-250 mx-auto text-[#FEFEFE] md:text-5xl text-xl font-semibold leading-[150%] text-center">
          {t("hero_heading")}
        </h2>

        <p className="xl:w-275 text-[#EAEAEA] md:text-2xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center mx-auto">
          {t("hero_subheading")}
        </p>

      <Dialog>
      <DialogTrigger className="flex mx-auto">
          <div className="mt-8">
          <div className="relative">
            <button className="w-79.75 h-14 bg-[#FEFEFE33] rounded-4xl text-[#FEFEFE] text-lg font-semibold">
              {t('request_demo')}
            </button>

            <div className="absolute top-1/2 -right-6 -translate-y-1/2">
              <WhiteArrow />
            </div>
          </div>
        </div>
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

        <div className="mt-14 flex lg:flex-row flex-col items-center justify-center gap-6">
          <img 
            src="/images/home/hero_vid.jpg"
            alt="hero img"
            className="rounded-4xl opacity-70 md:h-109 h-47.5 md:w-full w-85.75 object-cover"
          />
          <div className="relative md:mt-0 -mt-20 md:ml-0 ml-36">
            <div className="md:w-[384px] w-51 md:h-109 h-54.25 bg-[#FEFEFE] rounded-4xl md:py-12 py-4 md:px-4 px-4">
            <h2 className="text-[#001B3F] md:text-2xl text-sm font-medium leading-[100%]">{t('increase_revenue')}</h2>
            <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
              {t('post_bookings')}
            </p>
            <img 
              src="/images/home/hero_dashboard.png"
              alt="dashboard"
              className="md:mt-11.25 mt-3"
            />
          </div>

          <div className="absolute -bottom-10 right-0">
            <Whatsapp />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
