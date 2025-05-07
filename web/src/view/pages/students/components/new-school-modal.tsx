import { Button } from '@/view/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/view/components/ui/drawer'
import { Input } from '@/view/components/ui/input'
import { Label } from '@/view/components/ui/label'
import { Separator } from '@/view/components/ui/separator'
import { PlusIcon } from 'lucide-react'

export function NewSchoolModal() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm">
          <PlusIcon size={16} />
          <span className="ml-2">Nova aluno</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-start">Adicionar aluno</DrawerTitle>
        </DrawerHeader>

        <Separator />

        <div className="p-4 pb-10">
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nome do aluno
              </Label>

              <Input
                type="text"
                id="name"
                placeholder="Digite o nome do aluno"
                className="input"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nome do responsável
              </Label>

              <Input
                type="text"
                id="name"
                placeholder="Digite o nome do responsável"
                className="input"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Telefone do responsável
              </Label>

              <Input
                type="text"
                id="name"
                placeholder="Digite o telefone"
                className="input"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                CEP
              </Label>

              <Input
                type="text"
                id="name"
                placeholder="Digite o CEP"
                className="input"
              />
            </div>

            <Button type="button" className="w-full">
              Adicionar
            </Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
