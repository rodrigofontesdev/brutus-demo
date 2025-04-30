import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toastify } from '../../../hooks/useToastify'
import { Box } from '../../atoms/Box'
import { ConfirmReportRemoval } from '../ConfirmReportRemoval'
import { Modal } from '../Modal'
import { Card, Title } from './styles'

export function ReportCard() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  async function handleDownloadReport() {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            toastify('Baixando o relatório do período de apuração de Maio de 2024.', 'success', {
              position: 'top-center',
            })
          )
        }, 1000)
      })
    } catch {
      toastify('Ocorreu um problema ao baixar o relatório, tente novamente.', 'error', {
        position: 'top-center',
      })
    }
  }

  async function handleDeleteReport() {
    await new Promise((resolve) => {
      setTimeout(() => {
        setIsConfirmModalOpen(false)

        resolve(
          toastify('O relatório foi removido com sucesso.', 'success', {
            position: 'top-center',
          })
        )
      }, 1000)
    })
  }

  return (
    <Box>
      <Card>
        <Title>
          <h3>Maio/2024</h3>
          <p>R$ 6.250,00</p>
        </Title>

        <Link to={`/relatorio/1`} role="button" aria-label="Ver relatório de Maio de 2024">
          <FontAwesomeIcon icon={faEye} fontSize="1.5rem" />
        </Link>

        <button
          type="button"
          aria-label="Baixar o relatório de Maio de 2024"
          onClick={handleDownloadReport}
        >
          <FontAwesomeIcon icon={faCloudArrowDown} fontSize="1.5rem" />
        </button>

        <Dialog.Root open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
          <Dialog.Trigger asChild>
            <button type="button" aria-label="Excluir o relatório de Maio de 2024">
              <FontAwesomeIcon icon={faTrashAlt} fontSize="1.5rem" />
            </button>
          </Dialog.Trigger>

          <Modal title="Excluir relatório">
            <ConfirmReportRemoval
              reportName="Maio de 2024"
              onConfirm={handleDeleteReport}
              onCancel={() => setIsConfirmModalOpen(false)}
            />
          </Modal>
        </Dialog.Root>
      </Card>
    </Box>
  )
}
